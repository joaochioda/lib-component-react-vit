export interface ResponseData {
  description: string;
  id: string;
  reference: string;
  title: string;
  specifications: SpecificationInterface[];
  items: Item[];
  type?: string;
}

export interface SpecificationInterface {
  [0]: string;
  [1]: string[];
}

export interface Item {
  id: string;
  name: string;
  nameComplete: string;
  images: ImageInterface[];
  offer: Offer;
}

export interface ImageInterface {
  id: string;
  text: string | null;
  url: string;
}

interface Offer {
  listPrice: number;
  price: number;
  installments: Installment;
}

interface Installment {
  count: number;
  value: number;
}
