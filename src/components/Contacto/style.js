import styled from 'styled-components'
import Img from '../../assets/img/PlanoBoss_Destaque_1140x608-1.png'

export const Container = styled.div`
    background-color: rgb(243, 243, 243);
    height: 500px;
    width: 100%;
    background-image: url(${Img});
    background-size: cover;
    color: white;
`;

export const All= styled.div`
    width: 100%;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.479);
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Titlediv = styled.div`
    width: 80%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h2{
        font-size: 27px;
        margin-bottom: 15px;
    }
`;
export const DivFomr = styled.div`
    width: 30%;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.479);

    form{
        width: 90%;
        display: flex;
        flex-direction: column;

        input{
            width: 97%;
            height: 25px;
            margin: 7px 0 10px 0;
            border: none;
            border-radius: 10px;
        }
        button{
            width: 90px;
            height: 30px;
            background-color: rgba(138, 14, 14, 384);
            color: white;
            border: none;
            border-radius: 10px;
        }
        #inpt-line{
            display: flex;
        }
        #texAre{
            height: 60px;
        }
    }
`;
