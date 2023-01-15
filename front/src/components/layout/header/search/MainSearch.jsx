import styled from "@emotion/styled";


function MainSearch() {
    return (
        <>
        <Container>
           <select >
               <option value="1">태그</option>
               <option value="2">제목</option>
           </select>
            <input type="text" placeholder="내용을 입력해주세요"/>
            <button>검색</button>
        </Container>
        </>
    )
}
export default MainSearch;

const Container = styled.div`
  display: flex;
  margin: 45px auto 0 auto;
  background:#ffffff;
  height: 50px;
  width: 738px;
  border: 2px solid #ff7100;
  border-radius: 80px;
  overflow: hidden;
  select{
    width: 150px;
    height: 50px;
    border:none;
    
    text-align: center;
    &:focus{
      outline: none;
    }
  }
  input{
    width: 450px;
    height: 50px;
    padding:0 20px;
    border:none;
    &:focus{
      outline: none;
    }
  }

  button{
    width: 130px;
    height: 100%;
    background:#ff7100;
    border:none;
    color:#ffffff;
    cursor: pointer;
    font-size: 16px !important;
  }
`