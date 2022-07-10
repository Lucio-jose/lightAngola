import react from "react";
import * as S from './style'
import Parceiro1 from '../../assets/img/log1.png'
import Parceiro2 from '../../assets/img/h.png'
import Parceiro3 from '../../assets/img/ll1.png'
import Parceiro4 from '../../assets/img/desenvolvimento-site-brasilia-criacao-site-brasilia-agencia-carcara-publicidade.jpg'
import Parceiro5 from '../../assets/img/poli.jpeg'
import Parceiro6 from '../../assets/img/maquininha-cartao-financas-825x293.png'

function Parceiro(){
return(
    <>
     <S.Container>
        <img src={Parceiro3} alt="" />
        <img src={Parceiro2} alt="" />
        <img src={Parceiro4} alt="" />
        <img src={Parceiro6} alt="" />
        <img src={Parceiro5} alt="" />
        <img src={Parceiro1} alt="" />
     </S.Container>
    </>
)
}
export default Parceiro