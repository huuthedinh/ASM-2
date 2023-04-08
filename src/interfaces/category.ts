import { Iproduct } from "./Product";

export interface ICategory {
    _id?: string | number,
    name: string,
    products: Iproduct
}