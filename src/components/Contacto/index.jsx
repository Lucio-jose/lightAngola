import react from "react";
import * as S from './style'
import Img from '../../assets/img/PlanoBoss_Destaque_1140x608-1.png'

function Home(){
return(
    <>
    <S.Container>
        <S.All>
        <S.Titlediv>
            <h2>Contacta-nos</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </S.Titlediv>
        <S.DivFomr>
            <form action="" method="post">
                <div id="inpt-line">
                    <div>
                     <h3>Nome</h3>
                     <input type="text" />
                    </div>
                    <div>
                    <h3>Email</h3>
                    <input type="text" />
                    </div>
                </div>
                <h3>Descrição</h3>
                <input type="text" id="texAre"/>
                <button>Enviar</button>
            </form>
        </S.DivFomr>
        </S.All>
    </S.Container>
    </>
)
}
export default Home