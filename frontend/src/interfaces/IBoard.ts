export namespace IBoard {
  export interface CommonProp {
    createdAt: Date;
    modifiedAt: Date;
    deletedAt: Date;
    deletedYn: string;
  }


  export interface Dotto {
    title: string;
    content: string;
    price: number;
    salesPrice: number;
    salesYn: boolean;
    genre: string;
    totalTime: string;
    tag: string[];
    postPhoto?: File[];
  }

  export interface Categories {
    text: string;
    value: string
  }
}