import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/User";
interface User {
    name: string;
}
const HeaderAdmin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        axios.get("http://localhost:8080/api/signin")
            .then(({ data }) => setUser(data.users))
    }, [])

    const [loggedIn, setLoggedIn] = useState<User | null>(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);
        navigate("/")
    };
    return (
        <div className="row row-cols-2 bg-primary">
            <div className="d-flex align-items-center">
                <Link to="/admin">
                    <img src="/thantran.png" alt="" width={50} className="ms-3 me-4" />
                </Link>
                <p className="text-light me-5 mt-2">Disboard</p>
                <input type="text" placeholder="Tìm kiếm ..." className="form-control" />
            </div>
            <p className="text-light mt-4 d-flex justify-content-center">
                {/* Xin chào: {loggedIn.name} <span className="login-status online"></span> */}
                <button onClick={handleLogout} className="btn btn-danger ms-4 mb-2"   > Logout</button>
            </p>

        </div>
    );
}

export default HeaderAdmin;
