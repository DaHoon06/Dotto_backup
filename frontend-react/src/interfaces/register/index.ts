export namespace IRegister {
  export interface Data {
    userType: string
    id: string
    password: string
    nickname: string
    gender: string
    contactType?: string
    phone?: string
    email?: string
    address?: string
    addressDetail?: string
    workspaceImg?: string
  }

  export interface Policy {
    dottoPolicyContent: string
    privatePolicyContent: string
  }

  export interface PROPS {
    changeComponent: (payload: string) => void
    onChange?: (data: Data) => void
    onClickTab?: (payload: boolean) => void
  }

  export interface OPTIONS {
    additionalData: (payload: RegisterOptions) => void
  }
}

export interface RegisterOptions {
  contactType?: string
  email?: string
  address?: string
  addressDetail?: string
  workspaceImg?: string
}
