import styled,{css, keyframes} from 'styled-components'

const slideIn = keyframes`
  from{
    margin-left: 1000px;
    }
    to{
       margin-left: 0px;
    }

`;

export const Headlogo = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(110, 21, 21);
    height: 60px;
    width: 100%;
    align-items: center;
    color: white;

    h2{
    margin-left: 100px;
}

nav{
    display: flex;
    width: 50%;
    height: 59px;
    justify-content: center;
    align-items: center;
}
 nav ul{
    display: flex;
}
  nav ul a{
    margin-right: 25px;
    text-align: center;
    color: white;
    animation-name: ${slideIn};
    animation-duration: 3s;
    font-size: 14px;
}
nav ul a:hover{
    border-bottom: 2px solid rgb(104, 8, 8);
    cursor: pointer;
    transition: 2s;
}
 nav button{
    width: 100px;
    height: 40px;
    margin-left: 10px;
    border: 2px solid rgb(214, 214, 214);
    border-radius: 60px;
    background-color: initial;
    color: rgb(255, 255, 255);
}
`;