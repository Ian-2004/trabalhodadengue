import ResumoCard from "../components/ResumoCard";
import FatoCard from "../components/FatoCard";
import resumo from "../data/resumo";
import fatos from "../data/fatos";

function Inicio({ onMudarTela }) {
  return (
    <>
      <section className="hero">
        <div className="hero-texto">
          <span className="etiqueta">INFORMAÇÃO E PREVENÇÃO</span>
          <h1>Pequenas atitudes ajudam a combater a dengue.</h1>
          <p>
            Aprenda a identificar possíveis focos do mosquito, conheça os sintomas e veja como
            proteger sua casa e sua comunidade.
          </p>
          <button className="botao-principal" onClick={() => onMudarTela("prevencao")}>
            Conferir checklist
          </button>
        </div>

        <div className="hero-imagem">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
            alt="Área verde com plantas e natureza"
          />
        </div>
      </section>

      <section className="secao">
        <div className="titulo-secao">
          <span className="etiqueta">ENTENDA A PREVENÇÃO</span>
          <h2>O que podemos fazer?</h2>
          <p>O combate à dengue começa com ações simples que podem ser feitas durante toda a semana.</p>
        </div>

        <div className="resumo-cartoes">
          {resumo.map((item) => (
            <ResumoCard key={item.numero} {...item} />
          ))}
        </div>
      </section>

      <section className="pesquisa-resumo">
        <span className="etiqueta">VOCÊ SABIA?</span>
        <h2>Informações importantes sobre a dengue</h2>

        <div className="fatos-grid">
          {fatos.map((fato) => (
            <FatoCard key={fato.titulo} {...fato} />
          ))}
        </div>

        <p className="fonte">Fonte de pesquisa: Ministério da Saúde.</p>
      </section>

      <section className="chamada">
        <div>
          <h2>Reserve alguns minutos para cuidar da sua casa.</h2>
          <p>Use a lista de prevenção para acompanhar as tarefas que você já realizou.</p>
        </div>
        <button className="botao-principal" onClick={() => onMudarTela("prevencao")}>
          Abrir checklist
        </button>
      </section>
    </>
  );
}

export default Inicio;
