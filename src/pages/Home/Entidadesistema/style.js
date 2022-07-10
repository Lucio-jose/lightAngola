import styled from 'styled-components'


const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
    target.forEach(function(element){
        if((windowTop)>element.offsetTop){
            element.classList.add(animationClass)
        } 
        else{
            element.classList.remove(animationClass)
        }
    })
}
 
animeScroll();

window.addEventListener('scroll',function(){
    animeScroll();
})

export const Allsection = styled.div`
    width: 100%;
    height: 550px;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(243, 243, 243);

    [data-anime]{
    opacity: 1;
    transition: .4s;
}

[data-anime="left"]{
    transform: translate3d(-50px, 0, 0);
}

[data-anime="right"]{
    transform: translate3d(50px, 0, 0);
}

[data-anime="bottom"]{
    transform: translate3d(0px, 0, -50px);
}

[data-anime].animate{
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}

    #Allexplic{
        width: 80%;
    height: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        width: 49%;
    height: 200px;
    }
    }

    section{
        margin-bottom: 60px;

        span{
            color: rgba(138, 14, 14, 384);
        }
        img{
            width: 10%;
        }
    }
`;

export const titlesection = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    h2{
        font-size: 30px;
        color: rgb(43, 42, 42);
        margin: 20px 0px 10px 0px;
    }
`;
