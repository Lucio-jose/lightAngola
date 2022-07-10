import styled from 'styled-components'
import Image from '../../assets/img/dependendo-intensidade-corrente-que-passa-pelo-corpo-podem-ocorrer-desde-pequenos-formigamentos-ate-morte-5a296b643d759.webp'

export const Containeraviso = styled.div`
width: 100%;
height: 500px;
background-image: url(${Image});
  background-attachment: fixed;
background-size: cover;

`;
export const SubContainer = styled.div`
width: 100%;
    height: 500px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  div{
      width: 60%;
      height: 300px;
    background-color: rgba(0, 0, 0, 0.479);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 10%;
    }

    h2{
        font-size: 30px;
        margin-bottom: 20px;
    }
  }
`