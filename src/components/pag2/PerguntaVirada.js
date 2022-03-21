import React from "react"
export default function PerguntaVirada(props){

    const [contagem,setContagem]=React.useState(0)
    const [estadoCarta, setEstadoCarta]=React.useState(false)
    const [status,setStatus] = React.useState("")

    if(status === "naoLembrei"){
        return (
            <div className="deck vermelho">
                <p>{props.novaPergunta}</p>
                <img src="imagens/vermelho.png" alt="Imagem de circulo vermelho com um X no meio"/>
            </div>
        )
    } else if(status === "quaseLembrei"){
        return (
            <div className="deck amarelo">
                <p>{props.novaPergunta}</p>
                <img src="imagens/amarelo.png" alt="Imagem de circulo amarelo com uma interrogação no meio"/>
            </div>
        )
    } else if(status === "lembrei"){
        return (
            <div className="deck verde">
                <p>{props.novaPergunta}</p>
                <img src="imagens/verde.png" alt="Imagem de circulo verde com um V no meio"/>
            </div>
        )
    }

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
                    <div onClick={()=> {setStatus("naoLembrei") 
                        setContagem(contagem+1)}} className="naoLembrei"><p>Não Lembrei</p></div>
                    <div onClick={()=> {setStatus("quaseLembrei") 
                        setContagem(contagem+1)}} className="quaseLembrei"><p>Quase não Lembrei</p></div>
                    <div onClick={()=> {setStatus("lembrei") 
                        setContagem(contagem+1) }} className="lembrei"><p>Zap!</p></div>

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