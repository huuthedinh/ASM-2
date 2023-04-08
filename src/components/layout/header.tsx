import { useState } from 'react';
import { Link } from 'react-router-dom';

interface User {
    name: string;
}

const HeaderPage = () => {
    const [loggedIn, setLoggedIn] = useState<User | null>(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);
    };

    return (
        <header>
            <div className=" bg-danger align-items-center d-flex" style={{ height: "100px" }}>
                <Link to="/"> <img src="../thantran.png" width={50} alt="logo" style={{ marginRight: "100px", marginLeft: "200px" }} /></Link>
                <input type="text" placeholder="Search" style={{ width: "768px", marginRight: "200px" }} className="form-control flex-fill g-col-6" />
                {loggedIn ? (
                    <>
                        <div className="text-white me-3">Xin chào : {loggedIn.name}</div>
                        <button onClick={handleLogout} className="btn btn-primary ms-3 " style={{ marginRight: "30px" }} > Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/signin" className="btn btn-primary ms-3">Signin</Link>
                        <Link to="/signup" className="btn btn-primary ms-3" style={{ marginRight: "30px" }}>Signup</Link>
                    </>
                )}
            </div>
        </header >
    );
}

export default HeaderPage;
