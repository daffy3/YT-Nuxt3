import { defineStore } from "pinia";
import axios from "axios";
import type { Article } from "~/types/api";

export const useStore = defineStore("store", () => {
    // State
    const searchValue = ref<string>("korea");
    const articleList = ref<Article[]>([]);

    // Actions
    // Mutations => State를 변경할 목적으로 작성된 코드
    const changeSearchValue = (payload: string) => {
        searchValue.value = payload;
    };
    // News API 호출
    const getNews = async () => {
        const API_KEY = "ce4c280c9dff4ac0a98c9d7ea869194d";
        const API_URL = `https://newsapi.org/v2/everything?q=${searchValue.value}&from=2024-05-24&sortBy=popularity&apiKey=${API_KEY}`;

        try {
            articleList.value = await axios.get(API_URL).then((res) => {
                return res.data.articles;
            });
        } catch (error) {
            console.log(error);
        }
    };

    return { searchValue, articleList, changeSearchValue, getNews };
});
