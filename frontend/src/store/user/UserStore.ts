import { Module } from 'vuex';
import { State } from '@/store';
import { ins as axios } from "@/lib/axios";
import { IUser } from "@/interfaces/IUser";

const userStore: Module<IUser.UserStore, State> = {
    namespaced: true,
    state: {
        isLogin: false,
        accessToken: '',
        refreshToken: '',
        nickname: '',
    },
    mutations: {
        login(state, payload){
            const { accessToken, refreshToken, nickname } = payload;
            state.isLogin = true;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.nickname = nickname;
        },
        logout(state){
            state.isLogin = false;
            state.accessToken = '';
            state.refreshToken = '';
            state.nickname = '';
        },
    },
    actions: {
        async login(context, { token }): Promise<boolean>{
            try {
                const { data } = await axios.post<IUser.AxiosLoginResponse>(`/user/auth/${token}`);
                const { success, result } = data;
                const { accessToken, refreshToken, nickname } = result;
                if (success) {
                    context.commit('login', {
                        nickname,
                        accessToken,
                        refreshToken,
                    });
                    return true;
                } else {
                    return false
                }
            } catch (e) {
                console.log(e);
                return false;
            }
        },
        async verify(context, { token }) {
            try {
                const { data } = await axios.post<IUser.AxiosLoginResponse>(`/user/verify`, token);
                const { success, result } = data;
                const { accessToken, refreshToken, nickname } = result;
                if (success) {
                    context.commit('login', {
                        nickname,
                        accessToken,
                        refreshToken,
                    });
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                console.log(e);
                return false;
            }
        },
        logout(context){
            context.commit('logout');
        },
    },
    getters: {
        isLogin: state => state.isLogin,
        nickname: state => state.nickname,
        accessToken: state => state.accessToken,
        refreshToken: state => state.refreshToken,
    },
}
export default userStore;