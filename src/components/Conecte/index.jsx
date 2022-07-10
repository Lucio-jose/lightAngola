import react from "react"; 
import './style.css'
import Img from '../../assets/img/icone-cloche-notification-rouge.png'


function Welcome(){
return(
    <>
 <div className="section-welcome">
     <div>
         <section>
         <h2>ACTIVA O SININHO</h2>
         <span>Para recebe niticições e manter-se informado</span>
         </section>
         <button><img src={Img} alt="" id="sinoImg"/></button>
         
     </div>
 </div>
    </>
)
}
export default Welcome