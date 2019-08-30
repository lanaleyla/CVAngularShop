//product interface
export interface Product {
    productId: number,
    categoryId: string,
    image: string,
    title: string,
    price: number,
    description: string
}

export class NewProduct implements Product {
    constructor(public productId: number,
        public categoryId: string,
        public image: string,
        public title: string,
        public price: number,
        public description: string) {
    }
}