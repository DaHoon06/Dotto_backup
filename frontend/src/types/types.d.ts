import Vue from "vue";

declare module 'vue/types/vue' {
    interface Vue {
        userId: string;
        token: string;
        isLogin: boolean;
    }
}