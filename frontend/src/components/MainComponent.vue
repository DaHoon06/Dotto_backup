<template>
  <div id="main-container">

    <section>
      <follow-list-component />
    </section>

    <section id="filter-area">
      <span class="filter-section">
        <sort-component
            @typeName="typeName"
            :selectedType="filterType"
            :showSortComponent="showSortComponent" />
        <button @click="showSort" >
          <span class="filter-text">{{ sendSortType }}</span>
          <img class="side-menu-drop-btn filter-text" src="@/assets/nav/filter-btn.png" alt="sort" />
        </button>
      </span>
      <span id="filter" class="filter-section">
        <button @click="showFilter">
          <span class="filter-text">FILTER</span>
          <img class="filter-text filter-toggle-img" src="@/assets/main/filter.png" alt="filter" />
        </button>
      </span>
    </section>

    <section id="tattoo-container">
      <article class="tattoo-board-list">
        <div>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img01.png" alt="sample01" />
        </div>
        <div class="tattoo-board-list-info user-name">tattooist_id</div>
        <div class="tattoo-board-list-info title">글 제목</div>
        <div class="tattoo-board-list-info">
          <span class="event-price price">5만원</span>
          <span class="original-price price">10만원</span>
          <span class="discount-rate price">50%</span>
        </div>

        <div class="tag-area tattoo-board-list-info location">홍대</div>
      </article>

      <article class="tattoo-board-list">
        <figure>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img02.png" alt="sample02" />
        </figure>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </article>

      <article class="tattoo-board-list">
        <figure>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img03.png" alt="sample03" />
        </figure>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </article>

      <article class="tattoo-board-list">
        <figure>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img04.png" alt="sample04" />
        </figure>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </article>

      <article class="tattoo-board-list">
        <figure>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img05.png" alt="sample05" />
        </figure>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </article>

      <article class="tattoo-board-list">
        <figure>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img06.png" alt="sample06" />
        </figure>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </article>

      <article class="tattoo-board-list">
        <figure>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img07.png" alt="sample07" />
        </figure>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </article>

      <article class="tattoo-board-list">
        <figure>
          <img class="tattoo-img" src="@/assets/main/sample/sample_img08.png" alt="sample08" />
        </figure>
        <p>글 제목</p>
        <p>50% 5만원 10만원</p>
        <p class="tag-area">홍대</p>
      </article>

    </section>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Vue} from "vue-property-decorator";
import { SortComponent, SideButtonComponent } from "@/components/common";
import FollowListComponent from "@/components/main/FollowListComponent.vue";

@Component({
  components: {
    SideButtonComponent,
    SortComponent,
    FollowListComponent
  }
})
export default class MainComponent extends Vue {
  showSortComponent = false;
  showFilterComponent = false;
  filterType: string;

  constructor() {
    super();
    this.filterType = '최신순'
  }

  private showSort() {
    this.showSortComponent = !this.showSortComponent;
  }

  private typeName(type: string) {
    this.filterType = type;
  }

  @Emit('showFilter')
  private showFilter() {
    this.showFilterComponent = !this.showFilterComponent;
    return this.showFilterComponent;
  }

  private get sendSortType() {
    return this.filterType;
  }




}
</script>

<style scoped>
#main-container {
  width: 100%;
  margin: 100px auto 20em auto;
  max-width: 1260px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#filter-area {
  height: 30px;
  display: inline-block;
  text-align: right;
  padding-right: 5em;
}

#tattoo-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

}

.side-menu-drop-btn {
  width: 12px;
}

.tattoo-board-list {
  box-shadow: 0 1px 2px 1px #adadad;
  border-radius: 2px;
  width: 260px;
  height: 380px;
  margin-top: 1em;
  margin-left: 1em;
}

.filter-text {
  font-size: 14px;
  margin-left: 5px;
  font-weight: 600;
}

.filter-toggle-img {
  width: 18px;
}

.filter-section {
  margin-left: 20px;
}

.tattoo-img {
  width: 240px;
  margin-left: 10px;
  margin-top: 8px;
}

.tag-area {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 8px;
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

@media screen and (max-width: 1550px){

}
@media screen and (max-width: 1239px){

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