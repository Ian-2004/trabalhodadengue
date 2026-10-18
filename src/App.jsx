
import { useState } from "react";
import "./App.css";

const focos = [
  {
    titulo: "Pneus e objetos no quintal",
    imagem:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=700&q=80",
    texto:
      "Pneus, baldes e outros objetos podem acumular água da chuva. Guarde-os em local coberto ou descarte-os corretamente.",
  },
  {
    titulo: "Vasos de plantas",
    imagem:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    texto:
      "Evite água acumulada nos pratinhos dos vasos. Limpe-os com frequência e verifique se não há água parada.",
  },
  {
    titulo: "Garrafas e recipientes",
    imagem:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80",
    texto:
      "Mantenha garrafas vazias viradas para baixo e descarte embalagens em locais apropriados.",
  },
  {
    titulo: "Calhas e ralos",
    imagem:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80",
    texto:
      "Retire folhas e sujeiras das calhas e verifique se os ralos estão limpos e sem água acumulada.",
  },
  {
    titulo: "Caixas de água",
    imagem:
      "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=700&q=80",
    texto:
      "Mantenha a caixa-d'água bem fechada e confira se a tampa está encaixada e em boas condições.",
  },
  {
    titulo: "Lixo e embalagens",
    imagem:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=700&q=80",
    texto:
      "Latas, copos e embalagens podem acumular água. Descarte o lixo corretamente e mantenha o ambiente limpo.",
  },
];

const tarefas = [
  "Verificar os vasos de plantas",
  "Retirar água parada do quintal",
  "Tampar caixas e reservatórios de água",
  "Limpar calhas e ralos",
  "Guardar garrafas e recipientes virados para baixo",
  "Verificar baldes, pneus e outros objetos",
  "Colocar o lixo em local adequado",
];

function CartaoFoco({ foco }) {
  return (
    <article className="cartao-foco">
      <img src={foco.imagem} alt={foco.titulo} />
      <div className="cartao-conteudo">
        <h3>{foco.titulo}</h3>
        <p>{foco.texto}</p>
      </div>
    </article>
  );
}

function App() {
  const [tela, setTela] = useState("inicio");
  const [menuAberto, setMenuAberto] = useState(false);
  const [tarefasFeitas, setTarefasFeitas] = useState([]);

  function mudarTela(novaTela) {
    setTela(novaTela);
    setMenuAberto(false);
    window.scrollTo(0, 0);
  }

  function marcarTarefa(tarefa) {
    if (tarefasFeitas.includes(tarefa)) {
      setTarefasFeitas(
        tarefasFeitas.filter((item) => item !== tarefa)
      );
    } else {
      setTarefasFeitas([...tarefasFeitas, tarefa]);
    }
  }

  const progresso = Math.round(
    (tarefasFeitas.length / tarefas.length) * 100
  );

  return (
    <div className="site">
      <header className="topo">
        <button
          className="logo"
          onClick={() => mudarTela("inicio")}
          aria-label="Voltar para o início"
        >
          <span className="logo-simbolo"></span>
          <span>
            Mosquitão <strong>Brasil</strong>
          </span>
        </button>

        <button
          className="botao-menu"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir ou fechar menu"
        >
          {menuAberto ? "Fechar ✕" : "Menu ☰"}
        </button>

        <nav className={menuAberto ? "menu aberto" : "menu"}>
          <button
            className={tela === "inicio" ? "ativo" : ""}
            onClick={() => mudarTela("inicio")}
          >
            Início
          </button>
          <button
            className={tela === "focos" ? "ativo" : ""}
            onClick={() => mudarTela("focos")}
          >
            Focos do mosquito
          </button>
          <button
            className={tela === "prevencao" ? "ativo" : ""}
            onClick={() => mudarTela("prevencao")}
          >
            Prevenção e checklist
          </button>
        </nav>
      </header>

      <main>
        {tela === "inicio" && (
          <>
            <section className="hero">
              <div className="hero-texto">
                <span className="etiqueta">INFORMAÇÃO E PREVENÇÃO</span>
                <h1>Pequenas atitudes ajudam a combater a dengue.</h1>
                <p>
                  Aprenda a identificar possíveis focos do mosquito,
                  conheça os sintomas e veja como proteger sua casa e
                  sua comunidade.
                </p>
                <button
                  className="botao-principal"
                  onClick={() => mudarTela("prevencao")}
                >
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
                <p>
                  O combate à dengue começa com ações simples que podem
                  ser feitas durante toda a semana.
                </p>
              </div>

              <div className="resumo-cartoes">
                <article className="resumo-card">
                  <span className="numero-card">01</span>
                  <h3>Identifique</h3>
                  <p>
                    Observe quintais, vasos, calhas e recipientes que
                    possam acumular água.
                  </p>
                </article>

                <article className="resumo-card">
                  <span className="numero-card">02</span>
                  <h3>Elimine</h3>
                  <p>
                    Retire a água parada, limpe os recipientes e
                    mantenha reservatórios bem fechados.
                  </p>
                </article>

                <article className="resumo-card">
                  <span className="numero-card">03</span>
                  <h3>Compartilhe</h3>
                  <p>
                    Converse com familiares e vizinhos sobre a
                    importância da prevenção.
                  </p>
                </article>
              </div>
            </section>

            <section className="pesquisa-resumo">
              <span className="etiqueta">VOCÊ SABIA?</span>
              <h2>Informações importantes sobre a dengue</h2>

              <div className="fatos-grid">
                <article className="fato">
                  <h3>Ovos resistentes</h3>
                  <p>
                    Os ovos do Aedes aegypti podem resistir por meses
                    em locais secos. Por isso, é importante limpar os
                    recipientes e não apenas retirar a água.
                  </p>
                </article>

                <article className="fato">
                  <h3>Quatro sorotipos</h3>
                  <p>
                    Existem quatro sorotipos do vírus da dengue.
                    Uma pessoa pode ter dengue mais de uma vez, e uma
                    nova infecção pode apresentar maior risco de
                    complicações.
                  </p>
                </article>

                <article className="fato">
                  <h3>Prevenção diária</h3>
                  <p>
                    Reservatórios fechados, quintais limpos e a
                    eliminação de água parada ajudam a reduzir os
                    locais onde o mosquito se reproduz.
                  </p>
                </article>
              </div>

              <p className="fonte">
                Fonte de pesquisa: Ministério da Saúde.
              </p>
            </section>

            <section className="chamada">
              <div>
                <h2>Reserve alguns minutos para cuidar da sua casa.</h2>
                <p>
                  Use a lista de prevenção para acompanhar as tarefas
                  que você já realizou.
                </p>
              </div>
              <button
                className="botao-principal"
                onClick={() => mudarTela("prevencao")}
              >
                Abrir checklist
              </button>
            </section>
          </>
        )}

        {tela === "focos" && (
          <section className="secao">
            <div className="titulo-secao">
              <span className="etiqueta">FIQUE ATENTO</span>
              <h1>Onde o mosquito pode se reproduzir?</h1>
              <p>
                O Aedes aegypti pode se desenvolver em recipientes
                com água acumulada. Confira alguns lugares que merecem
                atenção.
              </p>
            </div>

            <div className="focos-grid">
              {focos.map((foco) => (
                <CartaoFoco key={foco.titulo} foco={foco} />
              ))}
            </div>

            <div className="aviso">
              <h2>Não basta apenas esvaziar o recipiente</h2>
              <p>
                Sempre que possível, lave e esfregue as paredes dos
                recipientes para remover possíveis ovos. Mantenha
                caixas-d'água tampadas e faça verificações regulares.
              </p>
            </div>

            <button
              className="botao-principal"
              onClick={() => mudarTela("prevencao")}
            >
              Ir para o checklist
            </button>
          </section>
        )}

        {tela === "prevencao" && (
          <section className="secao">
            <div className="titulo-secao">
              <span className="etiqueta">FAÇA SUA PARTE</span>
              <h1>Checklist de prevenção</h1>
              <p>
                Marque as tarefas concluídas e acompanhe seu progresso.
                Você pode atualizar a lista sempre que verificar sua casa.
              </p>
            </div>

            <div className="checklist">
              <div className="progresso-cabecalho">
                <div>
                  <h2>Minha lista de cuidados</h2>
                  <p>
                    {tarefasFeitas.length} de {tarefas.length} tarefas
                    concluídas
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
                <div
                  className="barra-preenchida"
                  style={{ width: `${progresso}%` }}
                />
              </div>

              <div className="lista-tarefas">
                {tarefas.map((tarefa) => (
                  <label className="tarefa" key={tarefa}>
                    <input
                      type="checkbox"
                      checked={tarefasFeitas.includes(tarefa)}
                      onChange={() => marcarTarefa(tarefa)}
                    />
                    <span>{tarefa}</span>
                  </label>
                ))}
              </div>

              {progresso === 100 && (
                <p className="mensagem-sucesso">
                  Todas as tarefas foram marcadas! Continue verificando
                  sua casa regularmente.
                </p>
              )}

              <button
                className="botao-secundario"
                onClick={() => setTarefasFeitas([])}
              >
                Limpar marcações
              </button>
            </div>

            <section className="pesquisa-saude">
              <span className="etiqueta">SAÚDE E INFORMAÇÃO</span>
              <h2>Quais são os sintomas da dengue?</h2>
              <p>
                Os sintomas podem incluir febre, dor de cabeça, dor
                atrás dos olhos, dores no corpo e nas articulações,
                mal-estar e manchas vermelhas na pele.
              </p>

              <div className="alerta-saude">
                <h3>Sinais de alerta: procure atendimento médico</h3>
                <ul>
                  <li>Dor abdominal intensa e contínua.</li>
                  <li>Vômitos persistentes.</li>
                  <li>Tontura ou sensação de desmaio.</li>
                  <li>Sangramento no nariz ou na gengiva.</li>
                  <li>Sonolência intensa, irritabilidade ou fraqueza importante.</li>
                </ul>
                <p>
                  Sinais de alerta podem surgir mesmo quando a febre
                  diminui. Procure atendimento de saúde imediatamente
                  se eles aparecerem.
                </p>
              </div>

              <h2>Como se proteger?</h2>
              <ul className="lista-informativa">
                <li>
                  Use repelente conforme as instruções do fabricante.
                </li>
                <li>
                  Instale telas em portas e janelas, quando possível.
                </li>
                <li>
                  Use roupas que protejam braços e pernas, especialmente
                  em locais com muitos mosquitos.
                </li>
                <li>
                  Continue eliminando possíveis criadouros mesmo que
                  sua casa pareça estar limpa.
                </li>
              </ul>

              <h2>Fontes para pesquisar mais</h2>
              <p>
                Consulte fontes oficiais para encontrar orientações
                atualizadas e informações sobre a doença.
              </p>

              <div className="links-pesquisa">
                <a
                  href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ministério da Saúde — Dengue
                </a>
                <a
                  href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue/faq"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ministério da Saúde — Perguntas frequentes
                </a>
                <a
                  href="https://dadosabertos.saude.gov.br/dataset/arboviroses-dengue"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dados abertos sobre dengue
                </a>
              </div>

              <p className="fonte">
                Este conteúdo é educativo e não substitui uma avaliação
                de um profissional de saúde.
              </p>
            </section>
          </section>
        )}
      </main>

      <footer className="rodape">
        <div className="rodape-logo">
          Mosquitão <strong>Brasil</strong>
        </div>
        <p>
          Informação, prevenção e participação de todos no combate à dengue.
        </p>
        <p className="rodape-pequeno">
          Projeto educativo de conscientização sobre a dengue.
        </p>
      </footer>
    </div>
  );
}

export default App;
