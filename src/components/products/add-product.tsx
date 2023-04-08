import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { addForm, addSchema } from "../../interfaces/Product";
import { addProduct } from "../../api/product";
import { string } from "joi";
const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<addForm>({
        resolver: yupResolver(addSchema)
    })
    const handleOnSubmit = async (product: addForm) => {
        try {
            const response = await addProduct(product);
            console.log(response);

        } catch (error) {

        }

    }
    return (
        <div className="col-10">
            <h5 className="mt-5">Thêm mới sản phẩm</h5>
            <form action="" className="row row-cols-2" onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="col-4">
                    <label htmlFor="" className="mb-2 mt-5">Thêm ảnh</label>
                    <input
                        type="file"
                        className="form-control"
                        id="product-img"

                    />

                </div>
                <div className="col-8">
                    <h5>Thông tin sản phẩm</h5>
                    <label htmlFor="" className="mb-3">Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Nhập tên sản phẩm"
                        {...register("name")}
                    />
                    <p className=" text-danger" style={{ fontSize: "10px" }}>
                        {errors.name && errors.name.message}
                    </p>
                    <div className="row row-cols-2" >
                        <div>
                            <label htmlFor="" className="mb-2 mt-3">Giá gốc</label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập giá gốc sản phẩm"
                                    {...register("original_price")}
                                />
                                <p className=" text-danger" style={{ fontSize: "10px" }}>
                                    {errors.original_price && errors.original_price.message}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="mb-2 mt-3">Giá khuyến mãi</label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập giá khuyến mãi"
                                    {...register("price")}
                                />
                                <p className=" text-danger" style={{ fontSize: "10px" }}>
                                    {errors.price && errors.price.message}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="mt-3 mb-3">Danh mục</label>
                            <select className="form-select" {...register("categoryId")}>
                                <option value="">Vui lòng chọn danh mục</option>
                                <option value="642a7fe3a72296ba8fab007d">Điện thoại</option>
                                <option value="642a864f479360e7d401496e">Máy tính</option>
                                <option value="642c614d0ed067d8e625a1b6">Tablet</option>
                            </select>
                            <p className=" text-danger" style={{ fontSize: "10px" }}>
                                {errors.categoryId && errors.categoryId.message}
                            </p>
                        </div>
                    </div>
                    <label htmlFor="" className="mt-2 mb-3">Mô tả</label>
                    <textarea className="form-control"   {...register("description")} placeholder="Nhập mô tả sản phẩm"></textarea>
                    <p className=" text-danger" style={{ fontSize: "10px" }}>
                        {errors.description && errors.description.message}
                    </p>
                    <label className="mt-2 mb-3" placeholder="Nhập mô tả sản phẩm">Mô tả dài</label>
                    <textarea className="form-control"    {...register("salient_features")}></textarea>
                    <p className=" text-danger" style={{ fontSize: "10px" }}>
                        {errors.salient_features && errors.salient_features.message}
                    </p>
                    <button className="btn btn-primary mt-3">Thêm mới</button>
                </div>

            </form >
        </div >
    )

}
export default AddProduct;