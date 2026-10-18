import Checklist from "./Checklist";
import Saude from "./Saude";

function Prevencao({ tarefasFeitas, onAlternar, onLimpar }) {
  return (
    <section className="secao">
      <div className="titulo-secao">
        <span className="etiqueta">FAÇA SUA PARTE</span>
        <h1>Checklist de prevenção</h1>
        <p>
          Marque as tarefas concluídas e acompanhe seu progresso. Você pode atualizar a lista sempre
          que verificar sua casa.
        </p>
      </div>

      <Checklist tarefasFeitas={tarefasFeitas} onAlternar={onAlternar} onLimpar={onLimpar} />
      <Saude />
    </section>
  );
}

export default Prevencao;
