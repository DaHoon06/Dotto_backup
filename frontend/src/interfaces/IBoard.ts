import { IUser } from "@/interfaces/IUser";

export namespace IBoard {
  export interface CommonProp {
    createdAt: Date;
    modifiedAt: Date;
    deletedAt: Date;
    deletedYn: string;
  }
  // 닷투 게시글 불러오기
  export interface DottoDetail {
    id?: number;
    content?: string;
    genre?: string;
    member?: IUser.Information;
    postPhoto?: string[];
    price?: number;
    salesPrice?: number;
    salesYn?: string;
    tags?: string[];
    title?: string;
    totalTime?: number;
  }
  export interface dottoList {
    id: string;
    postNo: string;
    price: string;
    salesPct: string;
    salesPrice: string;
    salesYn: string;
    tags: string[];
    title: string;
    totalTime?: string;
    genre?: string;
    location?: string;
    content?: string;
  }
  export interface dottoListData {
    data: {
      dottoPostDtoList: dottoList[];
      hasNext: boolean;
      totalElement: number;
      totalPage: number;
    };
  }
  export interface getDottoList {
    code: number;
    result: dottoListData;
    success: boolean;
  }

  // 닷투 게시글 작성
  export interface Dotto {
    title: string;
    content: string;
    price: string;
    salesPrice: string;
    salesYn: boolean;
    genre: string;
    totalTime: string;
    tag: string[];
    postPhoto?: File[];
  }

  export interface IFileUpload {
    file: FileUpload[];
    preview: string;
    number: number;
  }

  export interface FileUpload {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
  }
  // 셀렉트 박스 인터페이스 정의
  export interface SelectOptions {
    text: string;
    value: string;
  }

  // 의뢰서 인터페이스 정의
  export interface SheetData {
    date?: null;
    time?: null;
    dottoPart?: string;
    size?: string;
    coverType?: string;
    illness?: string;
    requestContents?: string;
  }

  export interface EstimateSheet {
    result: boolean;
    data: SheetData;
  }
}
