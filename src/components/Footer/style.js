import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgb(243, 243, 243);
    height: 500px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        width: 75%;
        height: 450px;
        display: flex;
        justify-content: space-between;

        section{
            width: 23%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: black;

            h2{
                margin-bottom: 20px;
                border-bottom: 2px solid brown;
            }

            li{
                margin-bottom: 10px;
                font-size: 18px;
            }

            img{
                height: 150px;
            }
        }
    }
    #foot{
        width: 75%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid black;
        color: black;

        div{
            width: 300px;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            img{
                height: 30px;
                width: 15%;
            }
        }
    }
`;
