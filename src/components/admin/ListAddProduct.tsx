import HeaderAdmin from "../layout/HeaderAdmin";
import AdminCate from "../layout/adminCate";
import AddProduct from "../products/add-product";

const ListAddProduct = () => {
    return (
        <div className="container-xxl">
            <HeaderAdmin />
            <div className="row row-cols-2">
                <AdminCate />
                <AddProduct />
            </div>
        </div>
    )
}
export default ListAddProduct;