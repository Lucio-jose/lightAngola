import styled from 'styled-components'
import Imag from '../../assets/img/fundo-vermelho-em-branco-simples-para-negocios_53876-115949.webp'

export const Container = styled.div`
    height: 400px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubContainer = styled.div`
    background-image: url(${Imag});
    background-size: cover;
    height: 350px;
    width: 96%;
    display: flex;
    border-radius: 10px;


    #AllIntens{
        border-radius: 10px;
        width: 100%;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(85, 14, 14, 0.411);
    }
`;

