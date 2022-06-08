<template>
  <div id="dotto-post-wrapper">

    <div id="dotto-post-btn-area">
      <button type="button" id="dotto-post-btn" @click="posting" :disabled="openBtn" :class="openBtn ? '' : activeBtn">등록하기</button>
    </div>
    <div id="dotto-post-body">
      <div id="dotto-post-items-wrapper">
        <div id="dotto-post-title" class="dotto-post-side-div">
          <h4>닷투 게시글 작성</h4>
        </div>

        <div class="dotto-post-side-div">
          <input @change="validation" v-model="title" class="dotto-post-input" type="text" placeholder="ex) 블랙워크 꽃과 나비" />
        </div>

        <div class="dotto-post-side-div">
          <select @change="validation" v-model="genreDefault">
            <option disabled value="none">장르</option>
            <option v-for="(value, index) in genre" :value="value.value" :key="index">{{ value.text }}</option>
          </select>
          <select @change="validation" v-model="totalTimeDefault">
            <option disabled value="none">소요시간</option>
            <option v-for="(value, index) in totalTime" :value="value.value" :key="index">{{ value.text }}</option>
          </select>
        </div>

        <hr />

        <div class="event-price-wrapper dotto-post-side-div">
          <div class="won">
            <input
                @change="validation"
                v-model="originalPrice"
                id="original-price"
                class="dotto-post-input"
                type="number"
                placeholder="가격" /> <span>원</span>
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
                <input v-model="price" class="dotto-post-input" type="number" placeholder="0" /> <span>원</span>
              </div>
            </div>
            <div>
              <label>할인가격</label>
              <div class="won">
                <input v-model="salesPrice" class="dotto-post-input" type="number" placeholder="0" /> <span>원</span>
              </div>
            </div>
          </div>
        </transition>


        <hr />

        <div id="textarea-wrapper" class="dotto-post-side-div">
          <div id="dotto-post-tags-wrapper">
            <div v-for="(tags, index) in tag" :key="index">
            <span class="dotto-post-tags" >
              {{ tags }}
              <button @click="deleteTag(index)">X</button>
            </span>
            </div>
            <input @change="validation" v-model="addTag" id="dotto-post-tags" type="text" @keypress.enter="addTags" placeholder="해쉬 태그 등록" />
          </div>
          <div>
            <textarea v-model="content" placeholder="내용을 입력 해주세요.."></textarea>
          </div>
        </div>

        <div class="dotto-post-side-div">
          <div>여기 이미지 미리보기</div>
          <input @change="uploadFiles" type="file" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IBoard } from "@/interfaces/IBoard";

@Component
export default class DottoPostingComponent extends Vue {

  title = '';
  content = '';
  originalPrice = 0;
  price = 0;
  salesPrice = 0;
  salesYn = false;
  genreDefault = 'none';
  totalTimeDefault = 'none';
  postPhoto: any = [];

  tag: string[] = [];
  addTag = '';

  genre = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
  ];
  totalTime = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
  ];
  openBtn = true;
  activeBtn = 'active-post-btn'

  private validation(): void {
    this.openBtn = !!(this.title && this.genre && this.totalTime && this.content && this.price);
    console.log(this.content.length)
  }

  async posting():Promise<void> {
    alert('전송 중')

    const sendData: IBoard.Dotto = {
      title: this.title,
      content: this.content,
      price: this.price,
      salesPrice: this.salesPrice,
      salesYn: this.salesYn,
      genre: this.genre,
      totalTime: this.totalTime,
      tag: this.tag,
      postPhoto: this.postPhoto
    }

    const headers = {
      'Content-Type': 'multipart/form-data',
    }

    const { data } = await this.axios.post('/test', sendData, { headers });
    console.log(data);
  }

  private uploadFiles(e: Event) {
    const target = e.target as HTMLInputElement;
    this.postPhoto = target.files;
    this.addFiles(this.postPhoto);
  }
  private async addFiles(files: File[]): Promise<void> {
    const fileList = new FormData();
    for (let i = 0; i < files.length; i++) {
      fileList.append('files', this.postPhoto[i]);
    }
  }

  private addTags(): void {
    this.tag.push(this.addTag);
    this.addTag = '';
  }

  private deleteTag(index: number): void {
    this.tag.splice(index, 1);
  }

}
</script>

<style scoped>
hr {
  width: 100%;
  margin: 2rem auto
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
#dotto-post-items-wrapper {
  margin: auto;
  width: 90%;
}
#dotto-post-title {
  margin: 3em 0;
}
#dotto-post-wrapper {
  height: 100%;
}

#dotto-post-btn-area {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #BDBDBD;
  background: white;
}

#dotto-post-btn {
  border: 1px solid white;
  border-radius: 30px;
  margin-right: 4em;
  width: 130px;
  height: 40px;
  background: #F5F5F5;
  color: #BDBDBD;
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
  /*flex-direction: column;*/
  /*justify-content: space-evenly;*/
  background: white;
}

.dotto-post-side-div {
  width: 100%;
  /*margin-left: 2.5em;*/
}

#event-price-radio-area {
  margin-left: 2rem;
  /*display: flex;*/
  /*align-items: center;*/
}
#textarea-wrapper {
  border: 1px solid #BDBDBD;
  width: 100%;
  margin-top: 3rem;
}
#dotto-post-tags {
  width: 95%;
  min-width: 20em;
  border: none;
  margin: auto;
  border-bottom: 1px solid #BDBDBD;
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
  border: 1px solid #E2E2E2;
  border-radius: 3px;
  height: 40px;
  color: #BDBDBD;
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
  background: #F5F5F5;
  padding: 5px 7px;
}
.dotto-post-tags > button {
  margin-left: 10px;
}

#dotto-post-tags-wrapper {
  overflow: auto;
  display: flex;
}
.active-post-btn {
  background: #1c1b1b !important;
  color: white;
  font-weight: 700;
}

.fade-enter-active {
  transition: all .4s ease;
}

.fade-leave-active {
  transition: all 0s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>