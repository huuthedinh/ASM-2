
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { SignupForm, signupSchema } from "../../interfaces/User";
import { signup } from "../../api/users";
const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: yupResolver(signupSchema)
    })

    const onSubmit = async (product: SignupForm) => {
        try {
            const response = await signup(product)
            console.log(response);
            navigate('/signin')
            alert("Đăng kí thành công")
        } catch (err) {
            alert("Email đã tồn tại")

        }

    }
    return (
        <div className="signin container row ">
            <div className="signin container row">
                <div className="form-signin col-8">
                    <form action="" id="from-user" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="form-label">Tên</label>
                        <input
                            type="text"
                            placeholder="Nhập tên.."
                            className="form-control"
                            {...register('name')}
                        />
                        <p className=" text-danger" style={{ fontSize: "10px" }}>
                            {errors.name && errors.name.message}
                        </p>
                        <label htmlFor="form-label">Email</label>
                        <input
                            type="text"
                            placeholder="Nhập email.."
                            className="form-control"
                            {...register('email')}
                        />
                        <p className=" text-danger" style={{ fontSize: "10px" }}>
                            {errors.email && errors.email.message}
                        </p>
                        <label htmlFor="form-label">Điện thoại</label>
                        <input
                            type="text"
                            placeholder="phone number..."
                            className="form-control"
                            {...register('number')}
                        />
                        <p className="text-danger" style={{ fontSize: "10px" }}>
                            {errors.number && errors.number.message}
                        </p>
                        <label htmlFor="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            placeholder="Password.."
                            className="form-control"
                            {...register('password')}
                        />
                        <p className=" text-danger" style={{ fontSize: "10px" }}>
                            {errors.password && errors.password.message}
                        </p>
                        <label htmlFor="form-label">Confilm Password</label>
                        <input
                            type="password"
                            placeholder="Pasword.."
                            className="form-control"
                            {...register('confirmPassword')}
                        />
                        <p className=" text-danger" style={{ fontSize: "10px" }}>
                            {errors.confirmPassword && errors.confirmPassword.message}
                        </p>
                        <button
                            className="btn btn-primary form-control mt-4"
                            type="submit"
                        >
                            Đăng kí
                        </button>
                    </form>
                    <h5 className="mt-3">Hoặc đăng nhập bằng</h5>
                    <div className="icon mt-3">
                        <Link to="#">
                            <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" />
                        </Link>
                        <Link to="#">
                            <img src="https://img.icons8.com/cute-clipart/64/null/google-logo.png" />
                        </Link>
                    </div>
                </div>
                <div className="logo col-4">
                    <Link to="/">
                        <img src="./thantran.png" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Signup;