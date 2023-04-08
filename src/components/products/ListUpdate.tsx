
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { updateForm, updateSchema } from "../../interfaces/Product";
import { getById, update } from "../../api/product";
import { useParams, useNavigate } from "react-router-dom";
const ListUpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<updateForm>({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => {
            if (id) {
                console.log("id :", id);
                return await fetchProductById(id)
            }
        }
    });
    const onSubmit = async (data: updateForm) => {
        try {
            if (id) {
                const response = await update(id, data);
                console.log(response);
                navigate("/admin")
            }
        } catch (error) {
            console.log(error);

        }

    }
    const fetchProductById = async (id: string | number) => {
        const { data } = await getById(id)
        console.log("data :", data);

        return data.products;
    }

    return <div className="row row-cols-2 pt-4 container col-10 border p-2 bg-body">
        <div className="col-4">
            <h5>Cập nhật sản phẩm</h5>
            <img src="https://salt.tikicdn.com/ts/product/43/35/ca/4630727d5a4eee189dc3dacae0bf39d7.jpg" alt="" width={200} />
            <hr />
            <p>Mô tả ngắn: Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. </p>
            <hr />
        </div>
        <div className="col-8">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h5>Thông tin sản phẩm</h5>
                <label htmlFor="">Tên sản phẩm</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    {...register("name")}
                />
                <p className=" text-danger" style={{ fontSize: "10px" }}>
                    {errors.name && errors.name.message}
                </p>
                <div className="row row-cols-2 ">
                    <div>
                        <label htmlFor="">Giá gốc</label>
                        <input
                            type="number"
                            className="form-control mb-3"
                            {...register("original_price")}
                        />
                        <p className=" text-danger" style={{ fontSize: "10px" }}>
                            {errors.original_price && errors.original_price.message}
                        </p>
                    </div>

                    <div>
                        <label htmlFor="">Giá khuyến mãi</label>
                        <input
                            type="number"
                            className="form-control mb-3"

                            {...register("price")}
                        />
                        <p className=" text-danger" style={{ fontSize: "10px" }}>
                            {errors.price && errors.price.message}
                        </p>
                    </div>
                    <div>
                        <label htmlFor="">Danh mục</label>
                        <select name="" id="" className="form-select mb-3">
                            <option value="">Laptop</option>
                            <option value="">Máy tính</option>
                            <option value="">Điện thoại</option>
                        </select>
                    </div>
                </div>
                <label htmlFor="">Đặc điểm nổi bật</label>
                <textarea
                    className="form-control mb-3"
                    {...register("salient_features")}
                ></textarea>
                <p className=" text-danger" style={{ fontSize: "10px" }}>
                    {errors.salient_features && errors.salient_features.message}
                </p>
                <label htmlFor="">Mô tả dài</label>
                <textarea
                    className="form-control mb-3"
                    {...register("description")}
                ></textarea>
                <p className=" text-danger mb-2" style={{ fontSize: "10px" }}>
                    {errors.description && errors.description.message}
                </p>
                <button type="submit" className="btn btn-danger">Cập nhật</button>
            </form>
        </div>
    </div>
}
export default ListUpdateProduct;