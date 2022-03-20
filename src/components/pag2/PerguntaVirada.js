import React from "react"
export default function PerguntaVirada(props){

    const [estadoCarta, setEstadoCarta]=React.useState(false)

    function mudarEstadoCarta(){
    if(estadoCarta === false){
            return (
                <div className="perguntaVirada">
                    <p>{props.pergunta}</p>
                    <img onClick={()=> setEstadoCarta(true)} src="imagens/seta-voltinha.png" alt="seta preta para virar o card"/>
                </div>
            )
        } else if(estadoCarta === true){
            return(
                <div className="perguntaVirada">
                    <p>{props.resposta}</p>
                    <div className="naoLembrei"><p>Não Lembrei</p></div>
                    <div className="quaseLembrei"><p>Quase não Lembrei</p></div>
                    <div className="lembrei"><p>Zap!</p></div>

                </div>
            )
        }
    }
    return (
        <>
            {mudarEstadoCarta()}
        </>
    )
}