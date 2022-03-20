export default function Deck(){
    const decks = [
        {key:1, pergunta:"O que é JSX?", resposta:"Uma extensão de linguagem do JavaScript"},
        {key:2, pergunta:"O React é __", resposta:"uma biblioteca JavaScript para construção de interfaces"},
        {key:3, pergunta:"Componentes devem iniciar com __ ", resposta:"letra maiúscula"},
        {key:4, pergunta:"Podemos colocar __ dentro do JSX", resposta:"expressões"},
        {key:5, pergunta:"O ReactDOM nos ajuda __", resposta:"interagindo com a DOM para colocar componentes React na mesma"},
        /* {key:6, pergunta:"Usamos o npm para __", resposta:"gerenciar os pacotes necessários e suas dependências"},
        {key:7, pergunta:"Usamos props para __", resposta:"passar diferentes informações para componentes "},
        {key:8, pergunta:"Usamos estado (state) para __", resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
     */];
    
    return (
        <>
            {decks.map(() => <RenderizarDeck key={decks.key} pergunta={decks.pergunta} resposta={decks.resposta} /> )}
        </>
        
    )
}

function RenderizarDeck({key,pergunta,resposta}){
    return(
        <>
        
        <div className="deck">
            <p>{pergunta}</p>
        </div>
        
        </>
    )
}