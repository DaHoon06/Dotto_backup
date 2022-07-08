import { Module } from "vuex";
import { State } from "@/store";
import { IOptions } from "@/interfaces/common/IOptions";

const utilsStore: Module<IOptions, State> = {
    namespaced: true,
    state: {
        isModal: false,
        next: false,
        prev: false,
    },
    mutations: {
        showModal(state, payload) {
            state.isModal = payload;
        },
        next(state, payload) {
            state.next = payload;
        },
        prev(state, payload) {
            state.prev = payload
        }
    },
    actions: {

    },
    getters: {
        isModal: state => state.isModal,
        next: state => state.next,
        prev: state => state.prev
    },
}

export default utilsStore;