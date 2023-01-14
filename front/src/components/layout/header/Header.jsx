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
     height: 500px;
  
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,0.3);
    }
    img{
      width:100%;
      height: 100%;
      object-fit: cover;
     }
`;
const Container = styled.div`
    position: absolute;
    top:0;
    display: flex;
     width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    margin: 0 auto;
    border-bottom: 1px solid red;
 
  ${mq[0]}{
    width: 100vw;
    justify-content: space-around;
    height: 70px;
  }
`;

function Header({color, isMain}) {
    const TitleWrap = styled.div`
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      height: 100px;
      >p{
        text-align: center;
        width: 720px;
        font-size: 2.2rem;
        line-height: 45px;
          color:${color}
      }
  
`
    return (
        <HeaderContainer>
            <img src={`${process.env.PUBLIC_URL}/image/Banner.jpg`} alt=""/>
            {isMain ?
                <Container>
                    <Logo color={color}/>
                    <Search />
                    <RightGnb color={color}/>
                </Container>
                :
                <Container>
                    <Logo color={color}/>
                    <RightGnb color={color}/>
                </Container>
            }
            <TitleWrap>
                <p>솔직한 리뷰 밑을수 있는 평점</p>
                <p>오늘뭐먹지?</p>
                <Search/>
            </TitleWrap>
            {/*<Nav />*/}
        </HeaderContainer>
    );
}

export default Header;
