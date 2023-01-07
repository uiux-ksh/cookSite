import Nav from "./nav/Nav";
import styled from "@emotion/styled";
import Logo from "./logo/Logo";
import RightGnb from "./rightGnb/RightGnb";
import Search from "./search/Search";
import {mq} from "../../media/media";

const HeaderContainer = styled.header`
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: white;
    margin-bottom: 1px;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    width: 1200px;
    height: 90px;
    margin: 0 auto;
 
  ${mq[0]}{
    width: 100vw;
    justify-content: space-around;
    height: 70px;
  }
`;
const MainBorder = styled.div`
  border-bottom: 1px solid #333333;
 
`
function Header() {
    return (
        <HeaderContainer>
            <MainBorder>
              <Container>
                <Logo />
                <Search />
                <RightGnb />
              </Container>
            </MainBorder>
            <Nav />
        </HeaderContainer>
    );
}

export default Header;
