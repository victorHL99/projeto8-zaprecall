
import Deck from "./Deck"
import LogoMenor from "./LogoMenor"
import decks from "../ComponentesGlobais"
import React from "react"


export default function SegundaPagina(){
    const [contagem,setContagem]=React.useState(0)
    return (
        <main>
            <LogoMenor/>
            <div onClick={()=>setContagem(contagem+1)} >
            <Deck />
            </div>
            <footer>
                <p>{contagem}/{decks.length} CONCLUÍDOS</p>
            </footer>
            
        </main>
    
    )
}