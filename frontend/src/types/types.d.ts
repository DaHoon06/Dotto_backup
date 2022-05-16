import Vue from "vue";

declare module 'vue-google-oauth2' {}
declare module 'vue-google-login' {}s

declare global {
    interface Window {
        Kakao: any;
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $gAuth: any;
        userId: string;
        token: string;
        isLogin: boolean;
    }
}