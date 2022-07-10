import react from "react";
import * as style from './style'
import { Link } from "react-router-dom";
import Image from '../../../assets/img/mulher-negra-milenar-com-laptop-line-tendo-conferência-na-web-ou-reunião-no-escritório-moderno-funcionário-da-empresa-214819416.jpg'
import Image1 from '../../../assets/img/20160611093426endemobilizacao.jpg'

function Ilustracao(){
return(
    <>
    <style.Container>
        <div>
            <img src={Image1} alt="imagem"/>
        </div>
        <div>
            <h3>Evite enchente</h3>
            <p>
                Cadastra-se e faça tudo apartir de casa, amet consectetur adipisicing elit. 
                Incidunt earum non illo nisi quaerat et eveniet error dignissimos, atque minus illum. 
                Veniam quam maiores voluptas. 
                Deleniti dolore optio temporibus eaque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ad dolor dolores voluptates dicta earum ab tempora qui facilis harum ipsum. 
                Itaque consequuntur consectetur pariatur assumenda magni minima autem iste quas.
            </p>
            <Link to="">Saber mais</Link>
        </div>
    </style.Container>
    <style.Container>
        <div>
            <h3>Agora já é Possível</h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Incidunt earum non illo nisi quaerat et eveniet error dignissimos, atque minus illum. 
                Veniam quam maiores voluptas. 
                Deleniti dolore optio temporibus eaque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ad dolor dolores voluptates dicta earum ab tempora qui facilis harum ipsum. 
                Itaque consequuntur consectetur pariatur assumenda magni minima autem iste quas.
            </p>
            <Link to="">Saber mais</Link>
        </div>
        <div>
            <img src={Image} alt="imagem"/>
        </div>
    </style.Container>
    </>
)
}
export default Ilustracao