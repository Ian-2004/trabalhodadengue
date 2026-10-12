
import "./App.css";

const cuidados = [
  {
    icone: "💧",
    titulo: "Elimine água parada de possiveis focos",
    texto: "Não deixe água acumulada em vasos, pneus, garrafas ou baldes."
  },
  {
    icone: "🛢️",
    titulo: "Feche a caixa-d'água de todas as entradas e formas possiveis",
    texto: "Mantenha caixas, tonéis e reservatórios bem tampados."
  },
  {
    icone: "🧹",
    titulo: "Limpe calhas e ralos em geral",
    texto: "Evite o acúmulo de folhas e água nesses locais."
  },
  {
    icone: "🪴",
    titulo: "Cuide das plantas",
    texto: "Retire a água dos pratos dos vasos ou coloque areia."
  },
  {
    icone: "🗑️",
    titulo: "Feche bem o lixo",
    texto: "Descarte corretamente objetos que possam acumular água."
  },
  {
    icone: "🧴",
    titulo: "Use repelente",
    texto: "Utilize produtos registrados e siga as instruções do rótulo."
  }
];

function App() {
  return (
    <div className="site">
      <header className="topo">
        <a className="logo" href="#inicio">
          <span className="logo-icone">🦟</span>
          Mosquitt<span>ão</span>
        </a>

        <nav className="menu">
          <a href="#inicio">Início</a>
          <a href="#prevencao">Prevenção</a>
          <a href="#informacoes">Informações</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-conteudo">
            <span className="etiqueta">PREVENÇÃO COMEÇA EM CASA</span>
            <h1>
              Diga <span>não</span> ao
              <br /> mosquito da dengue!
            </h1>

            <p>
              Pequenas atitudes fazem uma grande diferença.
              Elimine os focos do mosquito e proteja sua família.
            </p>

            <a className="botao" href="#prevencao">
               Saiba como se prevenir →
            </a>
          </div>

          <div className="hero-destaque">
            <div className="simbolo-mosquito">🦟</div>
            <div className="aviso">
              Água parada não!
              <span>Combater o mosquito é responsabilidade de todos.</span>
            </div>
          </div>
        </section>

        <section className="prevencao secao" id="prevencao">
          <div className="introducao">
            <span className="icone-secao">🛡️</span>
            <h2>Como se prevenir?</h2>

            <h3>Combata o mosquito todos os dias</h3>
            <p>
              O Aedes aegypti pode transmitir dengue, zika e chikungunya.
              A melhor forma de prevenção é impedir sua reprodução,
              eliminando os locais onde ele pode colocar ovos.
            </p>
            <p>
              Confira os cuidados simples que você pode incluir na rotina.
            </p>
          </div>

          <div className="grade-cuidados">
            {cuidados.map((item) => (
              <article className="card-cuidado" key={item.titulo}>
                <div className="icone-cuidado">{item.icone}</div>
                <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="informacoes secao" id="informacoes">
          <div className="titulo-informacoes">
            <span className="icone-secao">ℹ️</span>
            <div>
              <h2>Mais informações</h2>
              <p>Conheça melhor a dengue e saiba como agir.</p>
            </div>
          </div>

          <article className="info-card info-vermelho">
            <span className="info-icone">🦟</span>
            <h3>O que é dengue?</h3>
            <p>
              É uma doença viral transmitida principalmente pela picada
              da fêmea infectada do mosquito Aedes aegypti.
            </p>
          </article>

          <article className="info-card info-amarelo">
            <span className="info-icone">⚠️</span>
            <h3>Principais sintomas</h3>
            <ul>
              <li>Febre alta</li>
              <li>Dor de cabeça</li>
              <li>Dor no corpo e nas articulações</li>
              <li>Dor atrás dos olhos</li>
              <li>Manchas vermelhas na pele</li>
            </ul>
          </article>

          <article className="info-card info-verde">
            <span className="info-icone">🛡️</span>
            <h3>O que fazer?</h3>
            <p>
              Em caso de sintomas, procure um serviço de saúde,
              mantenha-se hidratado e evite a automedicação.
            </p>
            <p>
              Dor abdominal intensa, vômitos persistentes ou sangramentos
              são sinais de alerta que exigem atendimento imediato.
            </p>
          </article>
        </section>

        <section className="ajuda secao" id="contato">
          <div className="ajuda-texto">
            <span className="ajuda-icone">💡</span>
            <h2>Informação que protege</h2>
            <p>
              O Mosquittão é um projeto informativo criado para reunir
              orientações de prevenção e conscientizar a população
              sobre os cuidados contra o mosquito.
            </p>
            <a
              className="link-oficial"
              href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/arboviroses"
              target="_blank"
              rel="noreferrer"
            >
              Consulte informações oficiais →
            </a>
          </div>

          <div className="ajuda-card">
            <span>📋</span>
            <h3>Faça sua parte</h3>
            <p>
              Reserve alguns minutos da semana para verificar seu quintal,
              os vasos e os recipientes que podem acumular água.
            </p>
            <a className="botao" href="#prevencao">
              Ver cuidados →
            </a>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <a className="logo" href="#inicio">
          🦟 Mosquitt<span>ão</span>
        </a>
        <p>Juntos contra a dengue, zika e chikungunya!</p>
        <a href="#inicio">Voltar ao início ↑</a>
        <small>Projeto educativo de prevenção à dengue.</small>
      </footer>
    </div>
  );
}

export default App;
