export default function PerguntaVirada(props){
    return (
        <div className="perguntaVirada">
            <p>{props.pergunta}</p>
            <img src="imagens/seta-voltinha.png" alt="seta preta para virar o card"/>
        </div>
    )
}