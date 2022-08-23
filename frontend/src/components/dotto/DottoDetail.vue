<template>
  <article id="dotto-detail-container">
    <article>
      <section class="dotto-detail-section">
        <p class="detail-form-title">이 작업이 마음에 드시나요?</p>
        <section class="c-mb-12">
          <button
            type="button"
            class="favorite-btn dotto-detail-common-btn c-mr-16"
          >
            찜하기
          </button>
          <button
            type="button"
            class="request-btn dotto-detail-common-btn"
            @click="redirectEstimateSheet"
          >
            의뢰하기
          </button>
        </section>
      </section>

      <hr class="hr-position" />

      <section class="dotto-detail-flex-row c-mt-32">
        <section id="dotto-detail-img">
          아래 3장의 이미지 확대해서 보기 default 첫번째 이미지
        </section>
        <section class="dotto-detail-flex" id="dotto-detail-information">
          <h1 class="detail-title">{{ list.title }}</h1>
          <!--          <div class="dotto-detail-flex-row">-->
          <!--            <div>조회수</div>-->
          <!--            <div>56회</div>-->
          <!--          </div>-->
          <section class="price-container c-mt-28">
            <h2 class="event-price c-mr-12">{{ list.salesPrice }}</h2>
            <h2 class="original-price">{{ list.price }}</h2>
          </section>

          <hr class="c-mt-24" />

          <section class="dotto-detail-flex-row c-mt-24">
            <h2 class="detail-items-label">위치</h2>
            <!--            <div>{{ list.location }}</div>-->
          </section>
          <section class="dotto-detail-flex-row c-mt-14">
            <h2 class="detail-items-label">장르</h2>
            <h3>{{ list.genre }}</h3>
          </section>
          <section class="dotto-detail-flex-row c-mt-14">
            <h2 class="detail-items-label">소요시간</h2>
            <h3>{{ list.totalTime }}</h3>
          </section>

          <hr class="c-mt-24" />

          <section class="c-mt-24">
            <textarea :value="list.content" readonly></textarea>
          </section>
          <section class="tag-area c-mt-24">
            <span
              class="tag c-mr-12"
              v-for="(tag, index) of list.tags"
              :key="index"
              >{{ tag }}</span
            >
          </section>

          <hr class="c-mt-60" />

          <article class="dotto-detail-section c-mt-26">
            <div class="dotto-detail-flex-row">
              <div>유저프로필</div>
              <div>
                <div>{{ member.nickname }}</div>
                <div class="dotto-detail-flex-row">
                  <div>팔로워</div>
                  <div>158.8만명</div>
                </div>
              </div>
            </div>
            <button type="button" class="dotto-detail-follow-btn">
              팔로우
            </button>
          </article>

          <hr class="c-mt-26" />
        </section>
      </section>

      <article class="dotto-detail-flex-row">
        <div class="dotto-detail-img-lists">이미지1</div>
        <div class="dotto-detail-img-lists">이미지2</div>
        <div class="dotto-detail-img-lists">이미지2</div>
      </article>
    </article>

    <section id="other-works-list">
      <h3 id="other-works-list-title">이 아티스트의 다른 작품 보기</h3>
      <div class="dotto-detail-flex-row">
        <button class="slide-btn" id="slide-left-btn"><</button>
        <div class="dotto-detail-other-design"></div>
        <div class="dotto-detail-other-design"></div>
        <div class="dotto-detail-other-design"></div>
        <div class="dotto-detail-other-design"></div>
        <button class="slide-btn" id="slide-right-btn">></button>
      </div>
    </section>

    <dotto-tabs-container id="dotto-tab" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DottoTabsContainer from "@/components/dotto/tab/DottoTabs.vue";
import { IBoard } from "@/interfaces/IBoard";
import { IUser } from "@/interfaces/IUser";

//TODO: 테스트 종료 후 class dotto-detail-comment-content height 수정

@Component({
  components: {
    DottoTabsContainer,
  },
})
export default class DottoDetailComponent extends Vue {
  /*
    TODO:
      1. 게시글 상세 조회
      2. 해당 게시물 작성자 프로필 조회
      3 - 1. 게시글에 있는 댓글 조회
      3 - 2. 게시글에 있는 리뷰 조회
  * */
  list: IBoard.DottoDetail;
  member: IUser.Information = {};
  postNo: string = this.$route.params.postNo;

  constructor() {
    super();
    this.list = {
      id: 0,
      content: "",
      genre: "",
      member: [] as IUser.Information,
      postPhoto: [],
      price: "",
      salesPrice: "",
      tags: [],
      title: "",
      totalTime: "",
    };
  }
  created() {
    this.init();
  }

  async init() {
    await this.getBoardData();
  }

  redirectEstimateSheet() {
    this.$router.push({ path: `/estimate/${this.postNo}` });
  }

  private async getBoardData() {
    try {
      const { data } = await this.axios.get(`/dottopost/${this.postNo}`);
      const { result, success } = data;
      if (success) {
        const { data } = result;
        const { member, genre: userGenre, totalTime, price, salesPrice } = data;
        const time = this.convertTime(totalTime);
        const genre = this.convertGenre(userGenre);
        const convertOriginalPrice = this.convertPrice(price + "");
        const covertSalesPrice = this.convertPrice(salesPrice + "");
        this.list = data;
        this.list.genre = genre;
        this.list.totalTime = time;
        this.list.price = convertOriginalPrice;
        this.list.salesPrice = covertSalesPrice;
        this.member = member;
      }
    } catch (e) {
      console.error(e);
    }
  }

  private convertPrice(price: string): string {
    return price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  private convertGenre(value: string): string {
    switch (value) {
      case "1":
        return "올드스쿨";
      case "2":
        return "뉴스쿨";
      case "3":
        return "재패니즈";
      case "4":
        return "블랙엔그레이";
      case "5":
        return "다크사이드";
      case "6":
        return "트래쉬플카";
      case "7":
        return "치카노";
      case "8":
        return "블랙워크";
      case "9":
        return "라인워크";
      case "10":
        return "폴리네시안";
      case "11":
        return "컬러";
      case "12":
        return "커스텀";
      default:
        return "장르";
    }
  }

  private convertTime(value: string): string {
    switch (value) {
      case "1":
        return "1 시간 이내";
      case "2":
        return "1 ~ 2 시간";
      case "3":
        return "2 ~ 3 시간";
      case "4":
        return "4 시간 이상";
      default:
        return "소요시간";
    }
  }
}
</script>

<style scoped>
hr {
  color: #e2e2e2;
  height: 2px;
  margin: 0;
}
.hr-position {
  width: 100vw;
  position: absolute;
  left: 0;
}
textarea {
  border: none;
  outline: none;
  resize: none;
  height: 112px;
  max-width: 496px;
  width: 100%;
  overflow-y: auto;
}
.detail-form-title {
  font-size: 20px;
  color: #222222;
  font-weight: 400;
}
#dotto-tab {
  margin-top: 160px;
}
/* 아웃라인 영역 */
#dotto-detail-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 960px;
  height: 100%;
  width: 100%;
  margin: auto;
}

/*다른 아티스트 작품 보기*/
#other-works-list {
  margin-top: 175px;
}
#other-works-list-title {
  font-size: 24px;
  color: #222222;
  margin-bottom: 19px;
  font-weight: 600;
}

/* 이미지 */
#dotto-detail-img {
  width: 50%;
  max-width: 640px;
  max-height: 640px;
  height: 100vh;
  border: 1px solid gray;
}
.dotto-detail-img-lists {
  width: 80px;
  height: 80px;
  border: 1px solid gray;
  margin-right: 10px;
}
.dotto-detail-other-design {
  border: 1px solid gray;
  width: 288px;
  height: 288px;
  margin-right: 10px;
  margin-left: 10px;
}

#dotto-detail-information {
  width: 100%;
  max-width: 512px;
  max-height: 640px;
  height: 100vh;
  margin-left: 48px;
  display: flex;
  flex-direction: column;
}

/* 버튼 */
.request-btn {
  color: white;
  background: #ff5831;
}
.favorite-btn {
  border: 1px solid #ff5831;
  color: #ff5831;
}
.dotto-detail-common-btn {
  border-radius: 20px;
  width: 120px;
  height: 40px;
  font-weight: 600;
}
.dotto-detail-follow-btn {
  border-radius: 20px;
  max-width: 74px;
  width: 100%;
  max-height: 37px;
  height: 100vh;
  font-size: 14px;
  font-weight: 600;
  color: #222222;
  background: #f5f5f5;
}
.slide-btn {
  text-align: center;
  position: absolute;
  top: 90%;
  border: 1px solid gray;
  border-radius: 30px;
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 16px;
}

#slide-left-btn {
  left: 9%;
  top: 65rem;
  z-index: 2;
}
#slide-right-btn {
  right: 9%;
  top: 65rem;
  z-index: 2;
}
/*-- 버튼 END --*/

/* layout */
.dotto-detail-flex-row {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.dotto-detail-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dotto-detail-other-design {
  display: flex;
}

/* 내부 컨텐츠 */
.detail-title {
  font-size: 28px;
  font-weight: 600;
  color: #222222;
}
.price-container {
  display: flex;
  align-items: center;
}
.event-price {
  color: #ff5831;
  font-size: 28px;
  font-weight: 600;
}
.original-price {
  color: #bdbdbd;
  text-decoration: line-through;
}

.detail-items-label {
  font-size: 14px;
  color: #919191;
  margin-right: 16px;
}
</style>
