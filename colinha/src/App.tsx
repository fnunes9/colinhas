import Contador from "./components/Contador";
import MeuComponente from "./components/meuComponente";
import Saudacao from "./components/props";
import Botao from "./components/Eventos"
import Input from "./components/EventoInput";
import FetchData from "./components/UseEffetc";
import { ThemeProvider } from "./components/UseContext"; // Importe o ThemeProvider
import BotaoTema from "./components/UseContext"; // Importe o BotaoTema

function App(){
  return(
    <>
    <MeuComponente/>
    <Saudacao nome="Fernanda"/>
    <Contador/>
    <Botao/>
    <Input/>
    <FetchData/>
    <ThemeProvider>
      <div>
        <h1>Alterar Tema</h1>
        <BotaoTema />
      </div>
    </ThemeProvider>
    </>
    
  );
}

export default App;