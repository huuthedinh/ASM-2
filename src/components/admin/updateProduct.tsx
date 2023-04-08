
import ListUpdateProduct from "../products/ListUpdate";
import HeaderAdmin from "../layout/HeaderAdmin";
import AdminCate from "../layout/adminCate";

const UpdateProduct = () => {
    return (
        <div>
            <HeaderAdmin />
            <div className="row row-cols-2">
                <AdminCate />
                <ListUpdateProduct />
            </div>
        </div>
    )
}
export default UpdateProduct;