import { addForm, updateForm } from "../interfaces/Product";
import instance from "./instance";
export const updateProduct = (_id: number | string) => {
    const uri = `/products/${_id}`
    return instance(uri);
}
export const getById = (_id: number | string) => {
    const uri = "/products/" + _id
    return instance.get(uri)
}
export const update = (_id: string, body: updateForm) => {
    const uri = "/products/" + _id
    return instance.put(uri, body)
}
export const addProduct = (product: addForm) => {
    const uri = "/products/"
    return instance.post(uri, product)
}