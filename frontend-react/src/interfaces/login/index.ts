export namespace LOGIN {
  export interface STATE {
    accessToken: string
    refreshToken: string
    nickname: string
    roles: string
  }

  export interface PROP {
    closeModal: (payload: boolean) => void
  }
}
