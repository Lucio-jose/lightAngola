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

        form{
            width: 45%;
            height: 35px;
            background-color: white;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-content: space-between;
            padding: 5px;
            margin-top: 25px;
            
            input{
                width: 250px;
                height: 30px;
                font-size: 15px;
                border: none;
                border-bottom: 1px solid black;
            }

            button{
                border: none;
            }

            #pesquisarAg{
                width: 100%;
            }
            img{
                width: 5%;
                height: 30px;
            }
        }
    }
`;

export const AllResult = styled.div`
  //  background-color: aqua;
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;


    #TitleResult{
        width: 91%;
        margin-bottom: 20px;
        font-size: 28px;
        border-bottom: 1px solid black;
    }
`;



export const Tridescribe = styled.div`
    width: 95%;
    height: 200px;
    display: flex;
    justify-content: space-around;

    section{
        height: 380px;
        display: flex;
        align-items: center;

        button{
            width: 95px;
            height: 35px;
            border: 1px solid black;
            color: red;
        }
    }


    div{
        width: 25%;
        height: 380px;
        background-color: rgb(243, 243, 243);
        display: flex;
        flex-direction: column;

        h3{
            margin-bottom: 10px;
            color: rgba(0, 0, 0, 0.742);
        }
        
        a{
            margin-top: 10px;
            color: rgba(138, 14, 14, 384);
        }
        
    }
`;