import { useState, useEffect } from "react"
import { Iproduct } from "../../interfaces/Product";
import axios from "axios";
import { Link } from "react-router-dom";

const ListCate = () => {
    const [products, setProducts] = useState<Iproduct[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/products")
            .then(({ data }) => {
                setProducts(data);
            });
    }, [])
    const handleDeleteProduct = (id: number | string) => {
        axios.delete(`http://localhost:8080/api/products/${id}`)
            .then(() => {
                const confilm = window.confirm("Bạn có muốn xóa không ?");
                if (confilm) {
                    const newData = products.filter((product) => product._id !== id);
                    setProducts(newData);

                    alert("Xóa sản phẩm thành công !")
                }
            })
    }


    return <div className="col-10 pt-5">
        <h3>Điện thoại</h3>
        <div>
            <table className="table table-bordered table-responsive" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Gia tiền</th>
                        <th>Giá gốc</th>
                        <th>Mô tả</th>
                        <th>Tính Năng</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price} </td>
                                <td>{product.original_price}</td>
                                <td>{product.description}</td>
                                <td>{product.salient_features}</td>
                                <td>
                                    <button className="btn btn-primary me-2" onClick={() => handleDeleteProduct(product._id)}>Xóa</button>
                                    <Link to={`/admin/update/${product._id}`} className="btn btn-primary">Sửa</Link>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
        <Link to="/admin/add" className="btn btn-primary mt-2 ">Thêm mới sản phẩm</Link>
    </div>
}

export default ListCate;
