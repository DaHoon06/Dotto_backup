export namespace IRegister {
  export interface Policy {
    dottoPolicyContent: string
    privatePolicyContent: string
  }

  export interface PROPS {
    changeComponent: (payload: string) => void
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
