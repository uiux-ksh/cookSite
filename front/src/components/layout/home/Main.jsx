import styled from "@emotion/styled";
import Banner from "./banner/Banner";
import Popularity from "./popularity/Popularity";
import Ranking from "./ranking/Ranking";
import Header from "../header/Header";
import {color} from "../../../constants/color";


function Main() {
    const headerColor = color.headerColor;
    const isMain = false;
    const Props = {
        color:headerColor,
        isMain
    }
    return (
        <>
            <Header {...Props}/>

            <Popularity />
            <Ranking />
        </>
    );
}

export default Main;
