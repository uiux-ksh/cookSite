import Header from "../../components/layout/header/Header";
import { Outlet } from "react-router";
import Footer from "./footer/Footer";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    );
}
export default Layout;
