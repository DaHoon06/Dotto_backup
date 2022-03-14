export namespace IUser {
    export interface IRegisterProp{
        nickName: string,
        password: string,
        email: string;
        phone: string;
    }

    export interface ILoginProp {
        MEMBER_ID: string,
        PASSWORD: string
    }

    export interface ILoginSuccess {
        result: boolean,
        token: string,
        nickName: string,
        email: string,
        loginType: string,
    }

}