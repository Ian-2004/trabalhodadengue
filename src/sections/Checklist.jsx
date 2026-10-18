import ChecklistItem from "../components/ChecklistItem";
import tarefas from "../data/tarefas";

function Checklist({ tarefasFeitas, onAlternar, onLimpar }) {
  const progresso = Math.round((tarefasFeitas.length / tarefas.length) * 100);

  return (
    <div className="checklist">
      <div className="progresso-cabecalho">
        <div>
          <h2>Minha lista de cuidados</h2>
          <p>
            {tarefasFeitas.length} de {tarefas.length} tarefas concluídas
          </p>
        </div>
        <strong>{progresso}%</strong>
      </div>

      <div
        className="barra-fundo"
        role="progressbar"
        aria-label="Progresso das tarefas de prevenção"
        aria-valuenow={progresso}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="barra-preenchida" style={{ width: `${progresso}%` }} />
      </div>

      <div className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <ChecklistItem
            key={tarefa}
            tarefa={tarefa}
            marcada={tarefasFeitas.includes(tarefa)}
            onAlternar={onAlternar}
          />
        ))}
      </div>

      {progresso === 100 && (
        <p className="mensagem-sucesso">
          Todas as tarefas foram marcadas! Continue verificando sua casa regularmente.
        </p>
      )}

      <button className="botao-secundario" onClick={onLimpar}>
        Limpar marcações
      </button>
    </div>
  );
}

export default Checklist;
