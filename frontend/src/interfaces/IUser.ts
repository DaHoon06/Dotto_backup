export namespace IUser {
    export interface IRegisterProp{
        nickname: string,
        password: string,
        email: string;
        phone: string;
        gender: string;
    }

    export interface ITattoist extends IRegisterProp{
        addr: string;
        subAddr: string;
    }

    export interface ILoginProp {
        email: string,
        password: string
    }

    export interface ILoginSuccess {
        result: boolean,
        token: string,
        nickname: string,
        email: string,
        loginType: string,
    }

    export interface SelectedOptions {
        value: string,
        text: string,
        disabled?: boolean
    }

}