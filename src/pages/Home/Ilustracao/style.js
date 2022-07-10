import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width: 40%;
        height: 360px;
        text-align: justify;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 20px;
        
        h3{
            margin-bottom: 15px;
            color: rgba(138, 14, 14, 384);
            font-size: 25px;
        }
        p{
            font-size: 17px;
            color: rgba(15, 14, 14, 14);
        }
    }
`;