import styled from "@emotion/styled";
import Banner from "./banner/Banner";
import Popularity from "./popularity/Popularity";
import Ranking from "./ranking/Ranking";


function Main() {
    return (
        <>
            <Banner />
            <Popularity />
            <Ranking />
        </>
    );
}

export default Main;
