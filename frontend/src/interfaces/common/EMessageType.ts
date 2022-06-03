export enum EMessageRegister {
  BLANK = '',
  ID_NOT_ENTERED = '아이디를 입력해주세요.',
  AVAILABLE_ID = '사용가능한 아이디 입니다.',
  AVAILABLE_NICKNAME = '사용가능한 닉네임 입니다.',
  EXIST_ID = '이미 아이디 닉네임입니다.',
  EXIST_NICKNAME = '이미 사용중인 닉네임입니다.',
  SPECIAL_CHARACTERS_NOT_ALLOWED = '특수문자는 입력할 수 없습니다.',
  PHONE_NOT_ENTERED = '하이픈(-)을 제외한 11자리를 입력해 주세요.',
  PASSWORD_NOT_ENTERED = '하나 이상의 문자, 하나의 숫자 및 특수문자를 조합하여 8자 이상 입력해주세요.',
  PASSWORD_RECHECK = '비밀번호를 다시 한 번 확인해주세요.',
}