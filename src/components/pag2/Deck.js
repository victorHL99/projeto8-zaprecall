import React from "react";
import RenderizarDeck from "./RenderizarDeck";
import decks from "../ComponentesGlobais";



export default function Deck(){
    
    return (
        <>
            <div className="container-deck">
                {decks.map((deck) => <RenderizarDeck id={deck.id} pergunta={deck.pergunta} Qpergunta={deck.Qpergunta} resposta={deck.resposta} />)}
            </div>
        </>
    )
}



