<template>
  <article class="estimate-sheet-container">
    <h1 id="estimate-title">의뢰서</h1>
    <section class="estimate-items-wrapper c-mt-56">
      <label>타투이스트</label>
      <h1 id="nickname" class="c-mt-16">닉네임</h1>
    </section>
    <section class="estimate-items-wrapper c-mt-56">
      <label>의뢰일자</label>
      <section class="c-mt-16">
        <date-picker
          v-model="date"
          :lang="lang"
          placeholder="날짜 선택"
          :disabled-date="disabledDate"
          @change="enabledButton"
        />

        <date-picker
          v-model="time"
          :minute-step="15"
          :hour-options="hours"
          format="HH:mm"
          value-type="format"
          type="time"
          placeholder="시간 선택"
          @change="enabledButton"
        />
      </section>
    </section>

    <hr />

    <section class="estimate-items-wrapper">
      <label>타투 부위</label>
      <input
        class="dotto-part-input c-mt-16"
        type="text"
        placeholder="타투 부위"
        v-model="dottoPart"
        @change="enabledButton"
      />
      <section class="test c-mt-16"></section>
    </section>
    <section class="estimate-items-wrapper c-mt-56">
      <label>타투 사이즈</label>
      <select
        class="dotto-size-select-box c-mt-16"
        v-model="size"
        @change="enabledButton"
      >
        <option disabled value="">타투 사이즈를 선택해 주세요.</option>
        <option
          v-for="(size, index) of dottoSize"
          :value="size.value"
          :key="index"
        >
          {{ size.text }}
        </option>
      </select>
    </section>

    <hr class="c-mt-40" />

    <section class="c-mt-40">
      <label>본 게시물</label>
      <div class="c-mt-24">
        <input type="checkbox" id="reference" v-model="reference" />
        <label for="reference">의뢰에 참고 적용하기</label>
      </div>
      <transition>
        <section v-show="reference" class="dotto-reference-detail c-mt-24">
          <span id="main-img">대표 이지미</span>
          <section>
            <p>닉네임</p>
            <p>제목</p>
            <p>태그들</p>
            <p>본문 내용</p>
          </section>
        </section>
      </transition>
    </section>

    <hr class="c-mt-48" />

    <section class="estimate-items-wrapper c-mt-40">
      <label>커버업 여부</label>
      <section class="cover-up-checks c-mt-40">
        <div class="div">
          <input
            id="new"
            type="radio"
            name="dotto-type"
            v-model="coverType"
            value="1"
            @change="enabledButton"
          />
          <label for="new">새로운 타투</label>
        </div>
        <div class="div">
          <input
            id="cover"
            type="radio"
            name="dotto-type"
            v-model="coverType"
            value="2"
            @change="enabledButton"
          />
          <label for="cover">커버업 타투</label>
        </div>
      </section>
    </section>

    <hr class="c-mt-48" />

    <section class="estimate-items-wrapper c-mt-40">
      <label>희망도안 (선택)</label>

      <file-upload-button @sendImg="getImg" :uploadType="estimateSheet" />

      <div class="c-mt-12">
        <p class="desc">
          원하는 도안을 첨부해주시면 더욱 자세한 상담이 가능해요.
        </p>
        <p class="desc">이미지 사이즈 및 포맥 ()px x ()px / jpg / 최대 1MB</p>
      </div>
    </section>

    <hr class="c-mt-40" />

    <section class="estimate-items-wrapper c-mt-40">
      <label>피부질환 여부</label>
      <section class="cover-up-checks c-mt-40">
        <div class="div">
          <input
            id="none"
            type="radio"
            name="diseases"
            v-model="skinDiseases"
            value="1"
            @change="enabledButton"
          />
          <label for="none">없음</label>
        </div>
        <div class="div">
          <input
            id="exist"
            type="radio"
            name="diseases"
            v-model="skinDiseases"
            value="2"
            @change="enabledButton"
          />
          <label for="exist">있음</label>
        </div>
      </section>
      <div class="c-mt-12">
        <p class="warning-msg">* 질환에 따라 시술이 거부 될 수 있습니다.</p>
        <p class="warning-msg">
          * 질환이 있음에도 이 사실을 거짓으로 통보하고 시술을 받은 경우 모든
          책임은 본인에게 있습니다.
        </p>
      </div>
    </section>

    <hr class="c-mt-48" />

    <section class="estimate-items-wrapper c-mt-40 last-section">
      <label>내용</label>
      <textarea
        id="textarea"
        class="c-mt-16"
        :placeholder="textareaPlaceholder"
        v-model="requestContents"
        @keyup="enabledButton"
      ></textarea>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import { IBoard } from "@/interfaces/IBoard";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import FileUploadButton from "@/components/common/utils/button/FileUploadButton.vue";

@Component({
  components: {
    DatePicker,
    FileUploadButton,
  },
})
export default class EstimateSheet extends Vue {
  //#TODO 본 게시물을 참조해야하기 때문에 props로 본문 데이터도 전달 받아야 한다.
  seq = this.$route.params;

  estimateSheet = "estimateSheet";
  requestContents = "";
  skinDiseases = "";
  coverType = "";
  size = "";
  dottoPart = "";
  designForm: any = [];
  reference = false;
  part: IBoard.SelectOptions[] = [
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
  dottoSize: IBoard.SelectOptions[] = [
    { text: "5cm", value: "1" },
    { text: "10cm", value: "2" },
    { text: "15cm", value: "3" },
    { text: "20cm", value: "4" },
    { text: "20cm 이상", value: "5" },
  ];
  textareaPlaceholder =
    "손님 요청사항, 도안의 의미, 특징, 신경써서 작업한 부분, 추가 혜택 등";
  // 캘린더 사용 변수
  date = null;
  time = null;
  lang = {
    days: ["일", "월", "화", "수", "목", "금", "토"],
    months: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    yearFormat: "YYYY년",
    monthFormat: "MM월",
    monthBeforeYear: false,
  };
  hours = Array.from({ length: 10 }).map((_, i) => i + 10);

  postNo: string = this.$route.params.postNo;
  created(): void {
    this.initData();
  }

  private async initData() {
    try {
      const { data } = await this.axios.get(`/dottopost/${this.postNo}`);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  // MARK: 버튼 활성화 할 때, 데이터도 함께
  @Emit("enabledSubmitButton")
  enabledButton(): IBoard.EstimateSheet {
    const haveADisease =
      this.skinDiseases === "2" && this.requestContents.length > 0;
    const noDisease = this.skinDiseases === "1";

    if (
      this.date &&
      this.time &&
      this.dottoPart.length &&
      this.size.length &&
      this.coverType.length &&
      (haveADisease || noDisease)
    ) {
      const sendData = {
        date: this.date,
        time: this.time,
        dottoPart: this.dottoPart,
        size: this.size,
        coverType: this.coverType,
        illness: this.skinDiseases,
        requestContents: this.requestContents,
      };
      return {
        result: false,
        data: sendData,
      };
    } else {
      return {
        result: true,
        data: {},
      };
    }
  }

  private getImg(img: IBoard.IFileUpload[]) {
    this.designForm = img;
  }

  private disabledDate(date: string): boolean {
    return (
      this.$moment(date).format("YYYYMMDD") <
      this.$moment().add("0", "days").format("YYYYMMDD")
    );
  }

  /*
   * 파일 업로드 관련
   * */
  // 희망 도안 선택
  private selectedHopeDesign(): void {
    console.log("희망 도안 선택");
  }
  // 커버업 이미지 선택
  private selectedCoverUpDesign(): void {
    console.log("커버업 이미지 선택");
  }
}
</script>

<style>
/* date-picker 사용을 위한 전역 CSS */

.mx-datepicker {
  width: 296px !important;
  height: 52px !important;
  margin-right: 8px;
}

.mx-datepicker > .mx-input {
  width: 296px !important;
  height: 52px !important;
}

td.cell:nth-child(1) {
  color: red !important;
}
</style>

<style scoped>
/* 정해지지 않은 부분 */
.test {
  max-width: 1120px;
  width: 100%;
  max-height: 240px;
  height: 100vh;
  border: 1px solid gray;
  border-radius: 4px;
  background: #f5f5f5;
}

label {
  color: #696969;
  font-weight: 500;
}

hr {
  border: 1px solid #e2e2e2;
  max-width: 1120px;
  width: 100%;
}

#textarea {
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  resize: none;
  max-width: 1120px;
  width: 100%;
  max-height: 160px;
  height: 100vh;
  color: #919191;
  outline: none;
  padding: 20px 24px;
  font-size: 16px;
}

#estimate-title {
  font-weight: 600;
  font-size: 28px;
  color: #222222;
}

#nickname {
  color: #222222;
  font-size: 18px;
  font-weight: 600;
}

/* 닷투 게시판 본문 내용 */
.estimate-sheet-container {
  padding: 136px 40px 56px;
  border: 1px solid #f5f5f5;
  box-shadow: 0 5px 10px 0 #e9e9e9;
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: auto;
  background: white;
}

/*---- COMMON ----*/
.estimate-items-wrapper {
  display: flex;
  flex-direction: column;
}
/*  ------- COMMON END -------  */

.last-section {
  margin-bottom: 148px;
}

.dotto-part-input {
  outline: none;
  border-radius: 4px;
  max-width: 238px;
  width: 100%;
  max-height: 52px;
  height: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 6px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
}
.dotto-size-select-box {
  outline: none;
  max-width: 376px;
  width: 100%;
  max-height: 52px;
  height: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 6px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
}
.dotto-reference-detail {
  display: flex;
  margin-top: 24px;
  border: 1px solid gray;
  width: 100%;
  height: 160px;
}

/* 커버업 여부 */
.desc {
  color: #919191;
  font-size: 14px;
}
.warning-msg {
  font-size: 14px;
  color: #e72c00;
}
/* radio */
.div {
  margin-right: 32px;
}
.cover-up-checks {
  display: flex;
  position: relative;
}
.cover-up-checks input[type="radio"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.cover-up-checks input[type="radio"] + label {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.cover-up-checks input[type="radio"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 2px;
  width: 21px;
  height: 21px;
  text-align: center;
  background: white;
  border: 1px solid #e2e2e2;
  border-radius: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05);
}
.cover-up-checks input[type="radio"] + label:active:before,
.cover-up-checks input[type="radio"]:checked + label:active:before {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
.cover-up-checks input[type="radio"]:checked + label:before {
  background: white;
  border-color: #222222;
}
.cover-up-checks input[type="radio"]:checked + label:after {
  content: "";
  position: absolute;
  top: 6px;
  left: 4px;
  width: 13px;
  height: 13px;
  background: #222222;
  border-radius: 100%;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
}
/*-----  radio END  -----*/
.upload-button {
  border: 1px solid #e2e2e2;
  border-radius: 30px;
  max-width: 162px;
  width: 100%;
  max-height: 48px;
  height: 100vh;
}
/* 커버업 여부 END */
</style>
