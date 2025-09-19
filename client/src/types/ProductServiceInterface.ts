import type { ProductInterface } from "./ProductInterface";

export interface ServiceInterface {
    products: ProductInterface[];
    total:    number;
    skip:     number;
    limit:    number;
}