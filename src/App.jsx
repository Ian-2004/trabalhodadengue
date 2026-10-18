import { useState } from "react";
import "./App.css";
import "./styles/mapa.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./sections/Inicio";
import Focos from "./sections/Focos";
import Prevencao from "./sections/Prevencao";

function App() {
  const [tela, setTela] = useState("inicio");
  const [menuAberto, setMenuAberto] = useState(false);
  // O estado do checklist fica aqui para não zerar ao trocar de tela
  const [tarefasFeitas, setTarefasFeitas] = useState([]);

  function mudarTela(novaTela) {
    setTela(novaTela);
    setMenuAberto(false);
    window.scrollTo(0, 0);
  }

  function alternarTarefa(tarefa) {
    if (tarefasFeitas.includes(tarefa)) {
      setTarefasFeitas(tarefasFeitas.filter((item) => item !== tarefa));
    } else {
      setTarefasFeitas([...tarefasFeitas, tarefa]);
    }
  }

  return (
    <div className="site">
      <Header
        tela={tela}
        menuAberto={menuAberto}
        onMudarTela={mudarTela}
        onAlternarMenu={() => setMenuAberto(!menuAberto)}
      />

      <main>
        {tela === "inicio" && <Inicio onMudarTela={mudarTela} />}
        {tela === "focos" && <Focos onMudarTela={mudarTela} />}
        {tela === "prevencao" && (
          <Prevencao
            tarefasFeitas={tarefasFeitas}
            onAlternar={alternarTarefa}
            onLimpar={() => setTarefasFeitas([])}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
