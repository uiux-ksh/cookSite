import Header from "../../components/layout/header/Header";
import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import {color} from "../../constants/color";

function Layout() {
    const headerColor = color.headerColor;
    const isMain = false;
    const Props = {
        color:headerColor,
        isMain
    }
    return (
        <>
            <Header  {...Props} />
            <Outlet />
            <Footer/>
        </>
    );
}
export default Layout;
