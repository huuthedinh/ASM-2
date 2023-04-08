import * as yup from "yup";
export interface IUser {
    _id?: number | string,
    name?: string,
    email: string,
    password: string,
    confilmpassword?: string,
    role?: string,
}

export const signupSchema = yup.object({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    email: yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    number: yup.number().typeError("Số điện thoại phải là số").positive("Phải là một số dương").min(9, "Tối thiểu 9 số").required("Số điện thoại không để trống"),
    password: yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Mật khẩu không khớp"),
})

export type SignupForm = yup.InferType<typeof signupSchema>

export const signinSchema = yup.object({
    email: yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: yup.string()
})

export type SigninForm = yup.InferType<typeof signinSchema>

export const updateSchema = yup.object({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    price: yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: yup.number().required("Trường dữ liệu bắt buộc"),
    description: yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type updateForm = yup.InferType<typeof updateSchema>