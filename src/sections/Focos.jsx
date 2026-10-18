import CartaoFoco from "../components/CartaoFoco";
import MapaFocos from "../components/MapaFocos";
import focos from "../data/focos";

function Focos({ onMudarTela }) {
  return (
    <section className="secao">
      <div className="titulo-secao">
        <span className="etiqueta">FIQUE ATENTO</span>
        <h1>Onde o mosquito pode se reproduzir?</h1>
        <p>
          O Aedes aegypti pode se desenvolver em recipientes com água acumulada. Confira alguns
          lugares que merecem atenção.
        </p>
      </div>

      <MapaFocos />

      <div className="focos-grid">
        {focos.map((foco) => (
          <CartaoFoco key={foco.titulo} foco={foco} />
        ))}
      </div>

      <div className="aviso">
        <h2>Não basta apenas esvaziar o recipiente</h2>
        <p>
          Sempre que possível, lave e esfregue as paredes dos recipientes para remover possíveis
          ovos. Mantenha caixas-d'água tampadas e faça verificações regulares.
        </p>
      </div>

      <button className="botao-principal" onClick={() => onMudarTela("prevencao")}>
        Ir para o checklist
      </button>
    </section>
  );
}

export default Focos;
