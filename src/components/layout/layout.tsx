import HeaderFage from "./header";
import { Outlet } from "react-router-dom"
import Footer from "./footer";
const Layout = () => {
    return <div className="container-xxl">
        <HeaderFage />
        <Outlet />
        <Footer />
    </div>
}
export default Layout;