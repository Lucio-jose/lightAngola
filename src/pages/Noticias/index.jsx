import react from "react";
import * as S from './style'
import Header from '../../components/NavBar/index'
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";

function Angec(){
return(
    <>
    <Header/>
    <S.Container>
        <S.SubContainer>
            <div id="AllIntens">
            <h2>Notícias</h2>
            </div>
        </S.SubContainer>
    </S.Container>
  
    <Footer/>
    </>
)
}
export default Angec