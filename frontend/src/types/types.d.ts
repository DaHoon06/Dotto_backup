import Vue from "vue";

declare global {
    interface Window {
        Kakao: any;
    }
}

declare module 'vue-google-oauth2' {}

declare module 'vue-google-login' {}

declare module 'vue/types/vue' {
    interface Vue {
        $gAuth: any;
        userId: string;
        token: string;
        isLogin: boolean;
    }
}