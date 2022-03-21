
import Deck from "./Deck"
import LogoMenor from "./LogoMenor"
import decks from "../ComponentesGlobais"


export default function SegundaPagina(){
    return (
        <main>
            <LogoMenor/>
            <Deck/>
            <footer>
                <p>/{decks.length} CONCLUÍDOS</p>
            </footer>
            
        </main>
    
    )
}