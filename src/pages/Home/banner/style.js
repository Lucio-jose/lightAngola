import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import slide1 from "../../../assets/img/o-distrito-speicherstadt-do-armazem-durante-o-por-do-sol-crepuscular-em-hamburgo-alemanha-armazens-iluminados-no-bairro-hafencity-em-hamburgo_136401-2048.webp";
import slide2 from "../../../assets/img/images_cms-image-000008730.jpg";
import slide3 from "../../../assets/img/0010072985.jpg";
import slide4 from "../../../assets/img/emprego-energias-renovaveis-subestacoes.jpg";

const slider = keyframes`
0%{
  left: 0;
}
20%{
  left: 0;
}
25%{
  left: -100%;
}
45%{
  left: -100%;
}
50%{
  left: -200%;
}
70%{
  left: -200%;
}
75%{
  left: -300%;
}
95%{
  left: -300%;
}
100%{
  left: -400%;
}

`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  top: 0px;

  ul {
    position: relative;
    width: 500%;
    height: 100%;
    left: 0;
    margin: 0;
    animation: 20s ${slider} infinite;
    transition: 10s all;
    display: flex;

    > div {
      width: 20%;
      height: 100%;

      transition: 10s all;

      display: flex;
      flex-wrap: wrap;
      background-repeat: no-repeat;
      background-size: 100%;
      align-items: center;
      background-size: cover;

      @media (max-width: 760px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :nth-child(1) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.7),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide1});
      }

      :nth-child(2) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.7),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide2});
      }

      :nth-child(3) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.7),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide3});
      }

      :nth-child(4) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.4),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide4});
      }

      :nth-child(5) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.7),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide1});
      }
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(138, 14, 14, 0.288);

  @media (max-width: 760px) {
    width: 80%;
    height: 50vh;
  }
  @media (max-width: 1024px) {
    width: 80%;
    height: 50vh;
  }

  h1 {
    font-size: 40px;

    @media (max-width: 760px) {
      font-size: 40px;
      margin-top: 1%;
    }

    @media (max-width: 290px) {
      font-size: 20px;
      margin-top: 1%;
    }
  }

  p {
    margin: 10px 0 20px;
    font-size: 20px;
    color: #fff;

    @media (max-width: 760px) {
      font-size: 12px;
      color: #fff;
      margin: 10px 0 20px;
    }
  }
`;
