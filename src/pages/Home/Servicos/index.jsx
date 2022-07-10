import react, { useState }from "react";
import * as S from './style'
import Uservice from './userService/index'
import Agencservice from './agenciaService/index'

function Servico(){

    const [descriptionProps, setDescriptionProps] = useState(true);
    const handleDescriptionProps = () => {
        setDescriptionProps(!descriptionProps);
    };

    return(
        <>
        <S.Allservico>
            <h2>Serviços</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <S.Btnopc>
                <button onClick={handleDescriptionProps}>Usuários</button>
                <button onClick={handleDescriptionProps}>Agencias</button>
            </S.Btnopc>
            <S.Descopc>
            {descriptionProps ? (
            <Uservice setView={handleDescriptionProps} />
          ) : (
            <Agencservice setView={handleDescriptionProps} />
          )}
            </S.Descopc>
        </S.Allservico>
        </>
    )
}
export default Servico