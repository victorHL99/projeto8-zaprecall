import React from "react"
import SegundaPagina from "../pag2/SegundaPagina"
import Logo from "./Logo"


export default function App(){

    const [pagina, setPagina] = React.useState(1)

    
    function renderizarTela(){
        function mudarPagina(){
            setPagina(pagina + 1)
        }

        if(pagina === 2){
            return <SegundaPagina/>
        } else{
            return (
                <div className="tela-inicial">
                    <Logo/>
                    <div onClick={mudarPagina} className="botao-iniciar">
                        <p>Iniciar Recall!</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {renderizarTela()}
        </>
    )
}