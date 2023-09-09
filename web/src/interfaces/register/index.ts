export namespace IRegister {
  export interface Data {
    userType: string
    id: string
    password: string
    nickname: string
    gender: string
    phone?: string
    contactType?: number
    contactValue?: string
    address?: string
    addressDetail?: string
    workspaceImg?: any
  }

  export interface PROPS {
    changeComponent: (payload: string) => void
    onChange?: (data: Data) => void
    onClickTab?: (payload: boolean) => void
    validation?: (data: any) => void
    closeModal?: (payload: boolean) => void
    setUserType?: (payload: boolean) => void
    userType?: boolean
  }

  export interface OPTIONS {
    userAdditionalInformation: (payload: RegisterOptions) => void
    validation: (data: any) => void
  }
}

export interface RegisterOptions {
  contactType?: number
  id?: string
  address?: string
  addressDetail?: string
  workspaceImg?: any
}
