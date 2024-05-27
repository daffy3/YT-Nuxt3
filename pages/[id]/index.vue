<template>
    <ClientOnly>
        <div v-if="pending" class="loading">
            <VueSpinnerFacebook size="48" />
        </div>
        <div v-else class="page">
            <CardComponent v-for="article in store.articleList" :key="article.url" :data="article" />
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import CardComponent from "../components/Card.vue";
import { useStore } from "@/stores/api";
import { VueSpinnerFacebook } from "vue3-spinners";

const route = useRoute();
const store = useStore();
const { pending } = await useAsyncData("getNews", () => store.getNews());

onMounted(() => {
    store.changeSearchValue(String(route.params.id));
});
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;

    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}
.loading {
    @include flex-center;
    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}
</style>
