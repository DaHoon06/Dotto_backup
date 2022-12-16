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
    workspaceImg?: any
  }

  export interface Policy {
    dottoPolicyContent: string
    privatePolicyContent: string
  }

  export interface PROPS {
    changeComponent: (payload: string) => void
    onChange?: (data: Data) => void
    onClickTab?: (payload: boolean) => void
    validation?: (data: any) => void
  }

  export interface OPTIONS {
    userAdditionalInformation: (payload: RegisterOptions) => void
    validation: (data: any) => void
  }
}

export interface RegisterOptions {
  contactType?: string
  email?: string
  address?: string
  addressDetail?: string
  workspaceImg?: any
}

export interface FileUpload {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}
