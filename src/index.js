import ReactDOM from "react-dom";
import Logo from "./components/Logo";
import BotaoIniciar from "./components/BotaoIniciar";

function App(){
    return(
        <div className="tela-inicial">
            <Logo/>
            <BotaoIniciar/>
        </div>
    )
}



ReactDOM.render(<App /> , document.querySelector(".tela-1"));