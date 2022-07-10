import react from "react";
import Header from '../../components/NavBar/index'
import Welcome from "../../components/Welcome";
import Banner from "./banner/index"
import Comofunciona from './Entidadesistema/index'
import Allservico from './Servicos/index'
import Avis from "../../components/AvisOne/index";
import Parceiro from "../../components/Parceiros/index";
import Ilustracao from "./Ilustracao/index";
import Fale from '../../components/Contacto/index'
import Footer from '../../components/Footer/index'
import Conect from '../../components/Conecte/index'
import './styleh.css'

function Home(){
return(
    <>
 <Header/>
 <Banner/>
 <Welcome/>
 <Comofunciona/>
 <Allservico/>
 <Avis/>
 <Parceiro/>
 <Ilustracao/>
 <Fale/>
 <Conect/>
 <Footer/>
    </>
)
}
export default Home