import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import store from '@/store';

@Component
export class Mixin extends Vue {
    public $store = store;

    get userId() {
        return '';
    }

    get token() {
        return '';
    }

    get isLogin() {
        return false;
    }
}