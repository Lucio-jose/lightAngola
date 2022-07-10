import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
        background-color: rgb(243, 243, 243);

  img{
      width: 13%;
      height: 100px;
      margin: 10px;
  }
  img:hover{
      width: 17%;
      height: 130px;
      transition: 2s;
      margin: 0;
  }
`; 