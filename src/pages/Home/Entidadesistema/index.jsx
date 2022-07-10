import react from "react";
import * as style from './style'
import Imag1 from '../../../assets/img/sdsdr.png'

function Home(){
return(
    <>
 <style.Allsection>
     <style.titlesection data-anime="bottom">
        <h2>Entidades do Sistema</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
     </style.titlesection>
     <div id="Allexplic">
         <div data-anime="left">
            <section>
                <img src={Imag1} alt=""/>
                <h3>Usuários</h3>
                <p>Lorem ipsum dolor sit, amet consectetuplllkkjlkkkk jjjjjjjjjjjjjjijiji ijijij hhuj loyy</p>
                <span>Loresmd dmdkfdkfkdfdkdkd</span>
            </section>
            <section>
                <img src={Imag1} alt=""/>
                <h3>Agencias</h3>
                <p>Lorem ipsum dolor sit, amet consectetuplllkkjlkkkk jjjjjjjjjjjjjjijiji ijijij hhuj loyy</p>
                <span>Loresmd dmdkfdkfkdfdkdkd</span>
            </section>
         </div>
         <div data-anime="right">
         <section>
                <img src={Imag1} alt=""/>
                <h3>Super-Gestor</h3>
                <p>Lorem ipsum dolor sit, amet consectetuplllkkjlkkkk jjjjjjjjjjjjjjijiji ijijij hhuj loyy</p>
                <span>Loresmd dmdkfdkfkdfdkdkd</span>
            </section>
            <section>
                <img src={Imag1} alt=""/>
                <h3>Agencias</h3>
                <p>Lorem ipsum dolor sit, amet consectetuplllkkjlkkkk jjjjjjjjjjjjjjijiji ijijij hhuj loyy</p>
                <span>Loresmd dmdkfdkfkdfdkdkd</span>
            </section>
         </div>
     </div>
 </style.Allsection>
    </>
)
}
export default Home