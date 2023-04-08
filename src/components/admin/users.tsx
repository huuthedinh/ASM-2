import HeaderAdmin from "../layout/HeaderAdmin";
// import ListCate from "./ListCate";
import ListUser from "./ListUser";
import AdminCate from "../layout/adminCate";

const ListUserAdmin = () => {
    return <div className="container-xxl">
        <HeaderAdmin />
        <div className="row row-cols-2">
            <AdminCate />
            <ListUser />
        </div>
    </div>
}
export default ListUserAdmin;