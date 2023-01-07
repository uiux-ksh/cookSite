import styled from "@emotion/styled";
import {color} from "../../../../constants/color";

function Popularity() {
    return(
        <Container>
            <PopularityWrap>
                <PopularText><h1><span>오늘의</span><span>인기 MENU</span></h1></PopularText>
                <PopularListLayout>
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </PopularListLayout>
            </PopularityWrap>
        </Container>
    )
}
export  default  Popularity

const Container = styled.section`
  width:1200px;
  margin:65px auto 0;
`
const PopularityWrap =styled.div`
  display: flex;
  height: 390px;
 
  align-items: center;
`
const PopularText = styled.div`
  width: 30%;
  span{
    display: block;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color:${color.main}
  }
`
const PopularListLayout = styled.div`
  flex-grow: 1;
    ul{
      display: flex;
      gap:10px;
      li{
        flex-grow: 1;
        height:390px;
        border:1px solid #222222;
        background:${color.main};
     
      }
    }
`
