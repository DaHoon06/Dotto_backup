<template>
  <section>

  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DottoCommentComponent, DottoReviewComponent } from "@/components/dotto";

@Component({
  DottoCommentComponent,
  DottoReviewComponent
})
export default class DottoTabsContainer extends Vue {

}
</script>

<style scoped>

</style>