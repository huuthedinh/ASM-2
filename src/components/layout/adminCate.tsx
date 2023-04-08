import { Link } from "react-router-dom";
const AdminCate = () => {
    return <div className="admin-cate pt-5 col-2">
        <Link to="/admin" className="text-decoration-none text-dark">
            <div className="d-flex gap-1  ">
                <span className="material-symbols-outlined fs-1">phone_android</span>
                <p className="mt-2">Điện thoại</p>
            </div>
        </Link>
        <Link to="" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <span className="material-symbols-outlined fs-1">
                    laptop_mac
                </span>
                <p className="mt-2">Laptop</p>
            </div>
        </Link>
        <Link to="" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <span className="material-symbols-outlined fs-1">
                    tablet_mac
                </span>
                <p className="mt-2">Máy tính bảng</p>
            </div>
        </Link>
        <Link to="" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <span className="material-symbols-outlined fs-1">
                    earbuds_battery
                </span>
                <p className="mt-2">ÂM thanh</p>
            </div>
        </Link>
        <Link to="/admin/user" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <span className="material-symbols-outlined fs-1">
                    account_circle
                </span>
                <p className="mt-2">User</p>
            </div>
        </Link>
    </div>
}
export default AdminCate;