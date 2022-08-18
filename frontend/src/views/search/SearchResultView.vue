<template>
  <main>
    <search-categories />
    <follow-list-component :type="(memberType = 'artist')" />
    <follow-list-component :type="(memberType = 'user')" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FollowListComponent from "@/components/main/FollowList.vue";
import SearchCategories from "@/components/search/SearchCategories.vue";

@Component({
  components: {
    FollowListComponent,
    SearchCategories,
  },
})
export default class SearchResultView extends Vue {
  memberType = "";
}
</script>

<style scoped></style>
