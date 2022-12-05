export namespace Regex {
  // 회원가입 정규 표현식
  export const ID = /^[a-z0-9_]{5,20}$/
  export const PASSWORD =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  export const NICKNAME = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/
  export const PHONE = /^01([016789])-?([0-9]{4})-?([0-9]{4})$/
  export const EMAIL =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
}
