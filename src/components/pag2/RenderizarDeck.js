import React from "react"
import PerguntaVirada from "./PerguntaVirada"

export default function RenderizarDeck(props){
    
    const [deck,setDeck] = React.useState(0)

    if(deck === props.id){
        return (
            <PerguntaVirada pergunta={props.Qpergunta} resposta={props.resposta} novaPergunta={props.pergunta}/>
            )
        }
        
        return(
            
            <div onClick={()=> setDeck(props.id)} className="deck">
                <p>{props.pergunta}</p>
                <img src="imagens/Vector.png" alt="Setinha preta"/>
            </div>
        
    )
}