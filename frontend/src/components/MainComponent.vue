<template>
  <div id="main-container">

    <section id="follow-artist-area">
      <div>
        <p class="follow-artist-title">내가 팔로우 한 아티스트</p>
        <div class="">
          <div>
            <img class="follow-artist-list" src="@/assets/main/sample/sample-follow-artist.png" alt="sample1" />
          </div>
          <p class="follow-artist-nickname">닉네임</p>
        </div>
        <!--      <div class="">
                <img class="follow-artist-list" src="@/assets/main/sample/sample_img02.png" alt="sample1" />
              </div>
              <div class="">
                <img class="follow-artist-list" src="@/assets/main/sample/sample_img02.png" alt="sample1" />
              </div>
              <div class="">
                <img class="follow-artist-list" src="@/assets/main/sample/sample_img02.png" alt="sample1" />
              </div>
              <div class="">
                <img class="follow-artist-list" src="@/assets/main/sample/sample_img02.png" alt="sample1" />
              </div>-->
      </div>
    </section>

    <section id="filter-area">
      <span>
        <sort-component @typeName="typeName" :selectedType="filterType" :showSortComponent="showSortComponent" />
        <button @click="showSort" >
          {{ sendSortType }}
          <img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" />
        </button>
      </span>
    </section>

    <section id="tattoo-container">
      <div class="tattoo-board-list">
        <div>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img01.png" alt="sample01" />
        </div>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img02.png" alt="sample02" />
        </div>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img03.png" alt="sample03" />
        </div>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img04.png" alt="sample04" />
        </div>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img05.png" alt="sample05" />
        </div>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img06.png" alt="sample06" />
        </div>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img07.png" alt="sample07" />
        </div>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img08.png" alt="sample08" />
        </div>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </div>

    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SortComponent, SideButtonComponent } from "@/components/common";

@Component({
  components: {
    SideButtonComponent,
    SortComponent,
  }
})
export default class MainComponent extends Vue {
  showSortComponent: boolean;
  showFilterComponent: boolean;
  filterType: string;

  constructor() {
    super();
    this.showSortComponent = false;
    this.showFilterComponent = false;
    this.filterType = '최신순'
  }

  private showSort() {
    this.showSortComponent = !this.showSortComponent;
  }

  private typeName(type: string) {
    this.filterType = type;
  }

  private get sendSortType() {
    return this.filterType;
  }



}
</script>

<style scoped>
#main-container {
  /*border: 1px solid gray;*/
  width: 100%;
  margin: 100px auto auto auto;
  max-width: 1000px;
  min-height: 992px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#filter-area {
  height: 30px;
  text-align: right;
  margin-right: 20px;
  margin-top: 10px;
}

#tattoo-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.side-menu-drop-btn {
  width: 12px;
}

.tattoo-board-list {
  /*border: 1px solid gray;*/
  width: 220px;
  height: 300px;
  margin-left: 23px;
  margin-top: 60px;
}

.tattoo-img {
  width: 230px;
}

.tag-area {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 8px;

  /*  position: absolute;
    width: 61px;
    height: 22px;
    left: 361px;
    top: 1399px;*/

  background: #F5F5F5;


  /* 서울 홍대 */

  position: static;
  width: 40px;
  height: 23px;
  left: 8px;
  top: 4px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #696969;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;

}

.follow-artist-list {
  /* unsplash:et_78QkMMQs */

  /*position: absolute;*/
  width: 80px;
  height: 80px;
  left: 381px;
  top: 246px;
  margin-left: 23px;

  /*background: url(.jpg), #C4C4C4;*/

}

.follow-artist-title {
  margin-left: 23px;
}

.follow-artist-nickname {
  margin-left: 37px;
}
</style>