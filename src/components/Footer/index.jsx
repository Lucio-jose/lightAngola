import react from "react";
import * as S from './style'
import Img1 from '../../assets/img/minfin058649.png'
import Img2 from '../../assets/img/icones-red/facbo.png'
import Img3 from '../../assets/img/icones-red/png-clipart-computer-icons-transparency-logo-instagram-logo-orange-text-rectangle.png'
import Img4 from '../../assets/img/Facebook_Logo.png'
import Img5 from '../../assets/img/png-transparent-computer-icons-desktop-twitter-miscellaneous-orange-logo.png'
import Img6 from '../../assets/img/1c6716b235863cb53f9b3dbd3aa36ab8-icone-de-ponto-de-interrogacao-do-circulo-vermelho.png'

function Footer(){
return(
    <>
    <S.Container>
        <div>
            <section>
                <h2>ENDE Angola</h2>
                <img src={Img1} alt="" />
            </section>
            <section>
                <h2>Nossos Parceiros</h2>
                <ul>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                </ul>
            </section>
            <section>
            <h2>Serviços</h2>
                <ul>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                </ul>
            </section>
            <section>
            <h2>Sobre o sistema</h2>
                <ul>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                    <li>Lkmkk skaksa ksao</li>
                </ul>
            </section>
        </div>
        <section id="foot">
            <h3>Siga-nos nas redes sociais como:</h3>
            <div>
               <img src={Img6} alt="" />
               <img src={Img3} alt="" />
               <img src={Img4} alt="" />
               <img src={Img5} alt="" />
            </div>
        </section>
    </S.Container>
    </>
)
}
export default Footer