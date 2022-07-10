import react from "react";
import './style.css';
import { Link } from "react-router-dom";
import {Headlogo} from './style.js'

function Home(){
return(
    <>
    <Headlogo>
        <h2>ENDE</h2>
        <nav>
            <ul> 
                <Link to="/"><li>HOME</li></Link>
                <Link to="/Noticias"><li>NOTÍCIAS</li></Link>
                <Link to="/Agencias"><li>AGENCIAS</li></Link>
                <Link to=""><li>SOBRE NÓS</li></Link>
            </ul>
            <button>Login</button>
            <button>Cadastrar-se</button>
        </nav>
    </Headlogo>
    </>
)
}
export default Home