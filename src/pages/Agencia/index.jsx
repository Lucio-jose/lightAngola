import react from "react";
import * as S from './style'
import Header from '../../components/NavBar/index'
import Image1 from '../../assets/img/png-clipart-magnifying-glass-computer-icons-magnifier-magnification-magnifying-glass-text-service.png'
import Image2 from '../../assets/img/imadsges.png'
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/index";
import Image3 from '../../assets/img/Filda2017-20.jpg'
import Image4 from '../../assets/img/ENDE-EP_036602430.jpeg'
import Image5 from '../../assets/img/GranExpoNorte-28-3-14-EDP11.jpg'

function Angec(){
return(
    <>
    <Header/>
    <S.Container>
        <S.SubContainer>
            <div id="AllIntens">
            <h2>Pesquise uma Agencia apartir do :</h2>
               <form action="" method="get">
                   <input type="text" name="" id="" placeholder="Nome" />
                   <input type="text" name="" id="" placeholder="Municipio" />
                   <button><img src={Image2} alt="" id="pesquisarAg" /></button>
               </form>
            </div>
        </S.SubContainer>
    </S.Container>
    {/**
    <S.AllResult>
        <h2 id="TitleResult">Resultados da pesquisa</h2>
    <S.Tridescribe>
            <div>
            <img src={Image3} alt="" />
            <h3>Agencia Estalagem</h3>
            <p><h3>Localização: </h3> Estalagem</p>
            <Link to="">Ver no mapa &rarr;</Link>
            </div>
            <div>
            <img src={Image4} alt="" />
            <h3>Agencia Estalagem</h3>
            <p><h3>Localização: </h3> Estalagem</p>
            <Link to="">Ver no mapa &rarr;</Link>
            </div>
            <div>
            <img src={Image5} alt="" />
            <h3>Agencia Estalagem</h3>
            <p><h3>Localização: </h3> Estalagem</p>
            <Link to="">Ver no mapa &rarr;</Link>
            </div>
            <section>
            <button>Ver mais</button>
            </section>
        </S.Tridescribe>
    </S.AllResult> */}
    <Footer/>
    </>
)
}
export default Angec