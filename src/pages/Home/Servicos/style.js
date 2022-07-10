import styled from 'styled-components'

export const Allservico = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2{
        font-size: 30px;
        color: rgb(43, 42, 42);
        margin-bottom: 10px;
    }
`;
export const Btnopc = styled.div`
    width: 40%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;

    button{
        width: 200px;
        height: 50px;
        font-size: 15px;
        border: none;
        border-bottom: 2px solid rgba(138, 14, 14, 384);
    }
    button:hover{
        background-color: rgba(138, 14, 14, 384);
        color: white;
        transition: 2s;
    }
`;
export const Descopc = styled.div`
    width: 80%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`;