import { Module } from 'vuex';
import { State } from '@/store';
import { ins as axios } from "@/lib/axios";

interface User {
    isLogin: boolean,
    userId: string,
    userRole: string,
    userName: string,
    token: string,
}

interface LoginResponse {
    result?: boolean,
    token: string,
    role?: string,
    userId?: string,
    userRole?: string,
    userName?: string,
}

const userStore: Module<User, State> = {
    namespaced: true,
    state: {
        isLogin: false,
        userId: '',
        userRole: '',
        userName: '',
        token: '',
    },
    mutations: {
        login(state, payload){
            const { userId, userRole, userName, token } = payload;
            state.isLogin = true;
            state.userId = userId;
            state.userRole = userRole;
            state.userName = userName;
            state.token = token;
        },
        logout(state){
            state.isLogin = false;
            state.userId = '';
            state.userRole = '';
            state.userName = '';
            state.token = '';
        },
    },
    actions: {
        async login(context, { token }){
            try {
                const { data } = await axios.post<LoginResponse>(`/user/auth/${token}`);
                const { result, token: newToken, userId, userRole, userName } = data;
                if (result) {
                    context.commit('login', {
                        userId,
                        userRole,
                        userName,
                        token: newToken,
                    });
                }
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        },
        async verify(context, { token }) {
            try {
                const { data } = await axios.post<LoginResponse>(`/user/verify`, { token });
                const { result, token: newToken, userId, userRole, userName } = data;
                if (result) {
                    context.commit('login', {
                        userId,
                        userRole,
                        userName,
                        token: newToken,
                    });
                }
                return true;
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
        userId: state => state.userId,
        userRole: state => state.userRole,
        userName: state => state.userName,
        token: state => state.token,
    },
}
export default userStore;