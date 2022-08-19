<template>
  <div id="dotto-post-wrapper">
    <div id="dotto-post-btn-area">
      <button
        type="button"
        id="dotto-post-btn"
        @click="posting"
        :disabled="openBtn"
        :class="openBtn ? '' : activeBtn"
      >
        등록하기
      </button>
    </div>
    <div id="dotto-post-body">
      <div id="dotto-post-items-wrapper">
        <div id="dotto-post-title" class="dotto-post-side-div">
          <h4>닷투 게시글 작성</h4>
        </div>

        <div class="dotto-post-side-div">
          <input
            @keyup="validation"
            v-model="title"
            class="dotto-post-input"
            type="text"
            placeholder="ex) 블랙워크 꽃과 나비"
          />
        </div>

        <div class="dotto-post-side-div">
          <select @keyup="validation" v-model="genreDefault" class="select">
            <option disabled value="">장르</option>
            <option
              v-for="(value, index) in genre"
              :value="value.value"
              :key="index"
            >
              {{ value.text }}
            </option>
          </select>
          <select @keyup="validation" v-model="totalTimeDefault" class="select">
            <option disabled value="">소요시간</option>
            <option
              v-for="(value, index) in totalTime"
              :value="value.value"
              :key="index"
            >
              {{ value.text }}
            </option>
          </select>
        </div>

        <hr />
        <div class="event-price-wrapper dotto-post-side-div">
          <div class="won">
            <input
              @keyup="validation"
              v-model="originalPrice"
              id="original-price"
              class="dotto-post-input"
              type="number"
              placeholder="가격"
            />
            <span>원</span>
            <div id="event-price-radio-area">
              <input v-model="salesYn" type="checkbox" id="event-price" />
              <label for="event-price">할인이벤트</label>
            </div>
          </div>
        </div>

        <transition name="fade">
          <div class="event-price-wrapper dotto-post-side-div" v-show="salesYn">
            <div>
              <label>정상가격</label>
              <div class="won">
                <input
                  v-model="price"
                  class="dotto-post-input"
                  type="number"
                  placeholder="0"
                />
                <span>원</span>
              </div>
            </div>
            <div>
              <label>할인가격</label>
              <div class="won">
                <input
                  v-model="salesPrice"
                  class="dotto-post-input"
                  type="number"
                  placeholder="0"
                />
                <span>원</span>
              </div>
            </div>
          </div>
        </transition>

        <hr />

        <div id="textarea-wrapper" class="dotto-post-side-div">
          <div id="dotto-post-tags-wrapper">
            <div v-for="(tags, index) in tag" :key="index">
              <span class="dotto-post-tags">
                {{ tags }}
                <button @click="deleteTag(index)">X</button>
              </span>
            </div>
            <input
              v-model="addTag"
              maxlength="10"
              id="dotto-post-tags"
              type="text"
              @keypress.enter="addTags"
              placeholder="해쉬 태그 등록"
            />
          </div>
          <div>
            <textarea
              @keyup="validation"
              v-model="content"
              placeholder="내용을 입력해 주세요.."
            ></textarea>
          </div>
        </div>

        <file-upload-button @sendImg="getImg" :uploadType="dottoPosting" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import FileUploadButton from "@/components/common/utils/button/FileUploadButton.vue";
import { ins } from "@/lib/axios";
import { IBoard } from "@/interfaces/IBoard";

@Component({
  components: {
    FileUploadButton,
  },
})
export default class DottoPostingComponent extends Vue {
  dottoPosting = "dottoPosting";

  title = "";
  content = "";
  originalPrice = 0;
  price = 0;
  salesPrice = 0;
  salesYn = false;
  genreDefault = "";
  totalTimeDefault = "";
  postPhoto: any = [];
  tag: string[] = [];
  addTag = "";
  genre: IBoard.SelectOptions[] = [
    { text: "올드스쿨", value: "1" },
    { text: "뉴스쿨", value: "2" },
    { text: "재패니즈", value: "3" },
    { text: "블랙엔그레이", value: "4" },
    { text: "다크사이드", value: "5" },
    { text: "트래쉬폴카", value: "6" },
    { text: "치카노", value: "7" },
    { text: "블랙워크", value: "8" },
    { text: "라인워크", value: "9" },
    { text: "폴리네시안", value: "10" },
    { text: "컬러", value: "11" },
    { text: "커스텀", value: "12" },
  ];
  totalTime: IBoard.SelectOptions[] = [
    { text: "1 시간 이내", value: "1" },
    { text: "1 ~ 2 시간", value: "2" },
    { text: "2 ~ 3 시간", value: "3" },
    { text: "4 시간 이상", value: "4" },
  ];
  openBtn = true;
  activeBtn = "active-post-btn";

  created(): void {
    this.changeBackground();
  }

  getImg(img: IBoard.IFileUpload[]) {
    this.postPhoto = img;
  }

  private validation(): void {
    this.openBtn = !(
      this.title.length &&
      this.genreDefault.length &&
      this.totalTimeDefault.length &&
      this.content.length &&
      this.originalPrice
    );
  }

  async posting(): Promise<void> {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("title", this.title);
    formData.append("content", this.content);
    formData.append("price", String(this.price));
    formData.append("salesPrice", String(this.salesPrice));
    formData.append("salesYn", this.salesYn ? "Y" : "N");
    formData.append("genre", String(this.genre));
    formData.append("totalTime", String(this.totalTime));
    formData.append("tags", String(this.tag));
    formData.append("postPhoto", this.postPhoto);

    const { data } = await ins.post("/dottopost", formData, { headers });
    console.log(data);
    if (data) {
      await this.$router.push("/");
    }
  }

  private addTags(): void {
    if (this.tag.length < 5) {
      this.tag.push(this.addTag);
      this.addTag = "";
    } else {
      alert("모달 새로만들어서 최대 태그 문구 화면에 출력");
      this.addTag = "";
    }
  }

  private deleteTag(index: number): void {
    this.tag.splice(index, 1);
  }

  @Emit("changeBackground")
  private changeBackground() {
    return "posting";
  }
}
</script>

<style scoped>
hr {
  width: 100%;
  margin: 2rem auto;
  z-index: 0;
}

textarea {
  width: 90%;
  padding: 1rem;
  height: 400px;
  border: none;
  outline: none;
  resize: none;
  font-size: 14px;
  margin-left: 1.5rem;
}

.select {
  border: 1px solid #e2e2e2;
  width: 30%;
  height: 35px;
  padding: 5px 30px 5px 5px;
  border-radius: 4px;
  outline: none;
  margin: 20px 20px 0 0;
  color: #bdbdbd;
}
.select option {
  background: #ffffff;
  color: #000000;
  padding: 3px 0;
}

#dotto-post-items-wrapper {
  margin: auto;
  width: 90%;
}
#dotto-post-title {
  margin: 5em 0 2em 0;
}
#dotto-post-wrapper {
  height: 100%;
}

#dotto-post-btn-area {
  position: fixed;
  top: 144px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #bdbdbd;
  background: white;
  z-index: 1;
}

#dotto-post-btn {
  border: 1px solid white;
  border-radius: 30px;
  margin-right: 4em;
  width: 130px;
  height: 40px;
  background: #f5f5f5;
  color: #bdbdbd;
  font-size: 14px;
}

/* 게시글 작성 부분 */
#dotto-post-body {
  margin: auto;
  width: 90%;
  max-width: 1200px;
  height: 100%;
  max-height: 1325px;
  min-height: 600px;
  display: flex;
  background: white;
}

.dotto-post-side-div {
  width: 100%;
}

#event-price-radio-area {
  margin-left: 2rem;
}

#textarea-wrapper {
  border: 1px solid #e2e2e2;
  width: 100%;
  margin-top: 3rem;
  border-radius: 3px;
}
#dotto-post-tags {
  width: 95%;
  min-width: 20em;
  border: none;
  margin: auto;
  border-bottom: 1px solid #bdbdbd;
  outline: none;
  padding: 1rem;
  font-size: 13px;
}

/* 가격 관련 태그  */
#original-price {
  width: 25%;
}

.event-price-wrapper {
  display: flex;
}

.dotto-post-input {
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  height: 40px;
  color: #bdbdbd;
  outline: none;
  width: 100%;
  padding: 3px;
}
.won {
  display: flex;
  width: 90%;
  align-items: center;
}

.dotto-post-tags {
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  border-radius: 3px;
  color: #222222;
  margin: 20px 10px 10px 5px;
  background: #f5f5f5;
  padding: 5px 7px;
}
.dotto-post-tags > button {
  margin-left: 10px;
}

#dotto-post-tags-wrapper {
  overflow: auto;
  display: flex;
}
</style>
