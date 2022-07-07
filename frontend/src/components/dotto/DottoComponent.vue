<template>
  <article>

    <section id="tattoo-container">

      <article v-if="!existData">
        <h5>
          <router-link to="/dotto/board/view">임시 상세보기</router-link>
        </h5>
        <h5>API 연동 해야함</h5>
        <h1>게시글이 존재하지 않습니다.</h1>
      </article>
      <article class="tattoo-board-list" v-for="(dotto, index) in lists" :key="index" v-else>
        <!--TODO: 실제 변수 체크 -->
        <router-link :to="{ path: '/dotto/board/view', params: {postNo: dotto.postNo} }">
<!--          <section>-->
<!--            <img class="tattoo-img" :src=`${dotto.postPhoto}` alt="sample01" />-->
<!--          </section>-->
          <section class="tattoo-board-list-info user-name">{{ dotto.id }}</section>
          <section class="tattoo-board-list-info title">{{ dotto.title }}</section>
          <section class="tattoo-board-list-info">
            <span class="event-price price">{{ dotto.salesPrice }}</span>
            <span class="original-price price">{{ dotto.price }}</span>
            <span class="discount-rate price">{{ dotto.salesPct }}</span>
          </section>
          <!--TODO: 태그 추가 받아올때 스트링으로 넘어옴 -->

          <section class="tag-area tattoo-board-list-info location">
            {{dotto.tags}}
          </section>
<!--          <section @load="makeTags(dotto.tags)" class="tag-area tattoo-board-list-info location" v-for="(dottoTags, index) in tags" :key="index">-->
<!--            # {{ dottoTags }}-->
<!--          </section>-->
        </router-link>
      </article>
    </section>
    <infinite-loading
        @infinite="getDottoBoardList"
        spinner="waveDots"
        v-if="infiniteScroll"
    />

  </article>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { DottoPostingButton } from "@/components/dotto";
import InfiniteLoading from 'vue-infinite-loading';
import { IBoard } from "@/interfaces/IBoard";

@Component({
  components: {
    DottoPostingButton,
    InfiniteLoading
  }
})
export default class DottoComponent extends Vue {
  @Prop() limit?: number;
  @Prop() infiniteScroll?: boolean;

  existData = false;

  /*TODO:
      1. 닷투 게시판 인터페이스 정의
      2. 리스트 호출 -> limit 8, limit 16  2Type
      3. 무한 스크롤 기능 구현
  */
  testData: IBoard.dottoList[] = [];

  showSortComponent = false;
  showFilterComponent = false;
  filterType = '최신순';
  showSearchFilter = 'showSearchFilter';
  page = 0;
  lists: any[] = [];
  infiniteId = +new Date();
  tags: string[] = [];

  constructor() {
    super();
  }

  async created(): Promise<void> {
    this.changeBackground();
    if (!this.infiniteScroll) await this.initDottoBoard();
  }
  private async initDottoBoard() {
    const { data } = await this.axios.get('/dottopost', {
      params: {
        size: this.limit,
        page: this.page
      }
    });
    const { result, success } = data as any;
    if (success) {
      this.existData = true;
      const { data } = result;
      const { dottoPostDtoList } = data;
      this.lists.push(...dottoPostDtoList);
    }
  }

  private makeTags(tag: string) {
    this.tags = tag.split(',');
  }

  private async getDottoBoardList($state: any): Promise<void> {
    this.existData = false;
    try {
      const { data } = await this.axios.get('/dottopost', {
        params: {
          size: this.limit,
          page: this.page
        }
      });
      const { result, success } = data as any;
      if (success) {
        const { data } = result;
        const { dottoPostDtoList } = data;
        const { totalPage } = data;
        if (totalPage === this.page) {
          $state.complete();
        } else {
          setTimeout(async () => {
            this.lists.push(...dottoPostDtoList);
            this.page++;
            $state.loaded();
          }, 1000);
        }
        //태그 생성
        // this.makeTags(lists.tags)

        this.existData = true;
      } else {
        $state.complete();
      }
    } catch (e) {
      console.error(e);
    }
  }

  //- OPTIONS
  private showSort() {
    this.showSortComponent = !this.showSortComponent;
  }
  private typeName(type: string) {
    this.filterType = type;
  }
  private get sendSortType() {
    return this.filterType;
  }

  @Emit('showFilter')
  private showFilter() {
    this.showFilterComponent = !this.showFilterComponent;
    return this.showFilterComponent;
  }
  @Emit('changeBackground')
  private changeBackground() {
    return 'main';
  }

}
</script>

<style scoped>
#tattoo-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.tattoo-board-list {
  box-shadow: 0 1px 2px 1px #adadad;
  border-radius: 2px;
  width: 260px;
  height: 380px;
  margin-top: 1em;
  margin-left: 1em;
}

.tattoo-img {
  width: 240px;
  margin-left: 10px;
  margin-top: 8px;
}

.tattoo-board-list-info {
  font-size: 10px;
  color: #919191;
  margin-left: 0.6rem;
  margin-top: 0.225rem;
}

.title {
  color: #222222;
  font-size: 14px;
  font-weight: 700;
}

.user-name {
  font-weight: 400;
  line-height: 14px;
}

.location {
  margin-top: 0.7rem;
}

.price {
  margin-right: 0.2rem;
}

.event-price {
  color: #222222;
  font-size: 14px;
  font-weight: 700;
}

.discount-rate {
  color: #FF5841;
  font-weight: 700;
  font-size: 14px;
}
.original-price {
  color: #919191;
  font-size: 14px;
  font-weight: 400;
  text-decoration-line: line-through;
}

@media screen and (max-width: 1719px){

}

@media screen and (max-width: 1440px){
}

@media screen and (max-width: 1260px) {

}

@media screen and (max-width: 869px){
  #tattoo-container {
    justify-content: space-evenly;
  }

  .tattoo-board-list {
    width: 350px;
    height: 450px;
  }

  .tattoo-img {
    margin-left: 20px;
    margin-top: 13px;
    width: 310px;
  }
}

@media screen and (max-width: 599px){
  #tattoo-container {
    justify-content: space-around;
  }

  .tattoo-board-list {
    width: 350px;
    height: 450px;
  }

  .tattoo-img {
    margin-left: 10px;
    margin-top: 8px;
    width: 330px;
  }
}
</style>