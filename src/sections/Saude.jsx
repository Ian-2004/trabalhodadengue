import links from "../data/links";
import { sinaisAlerta, protecao } from "../data/saude";

function Saude() {
  return (
    <section className="pesquisa-saude">
      <span className="etiqueta">SAÚDE E INFORMAÇÃO</span>
      <h2>Quais são os sintomas da dengue?</h2>
      <p>
        Os sintomas podem incluir febre, dor de cabeça, dor atrás dos olhos, dores no corpo e nas
        articulações, mal-estar e manchas vermelhas na pele.
      </p>

      <div className="alerta-saude">
        <h3>Sinais de alerta: procure atendimento médico</h3>
        <ul>
          {sinaisAlerta.map((sinal) => (
            <li key={sinal}>{sinal}</li>
          ))}
        </ul>
        <p>
          Sinais de alerta podem surgir mesmo quando a febre diminui. Procure atendimento de saúde
          imediatamente se eles aparecerem.
        </p>
      </div>

      <h2>Como se proteger?</h2>
      <ul className="lista-informativa">
        {protecao.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Fontes para pesquisar mais</h2>
      <p>Consulte fontes oficiais para encontrar orientações atualizadas e informações sobre a doença.</p>

      <div className="links-pesquisa">
        {links.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
            {link.texto}
          </a>
        ))}
      </div>

      <p className="fonte">Este conteúdo é educativo e não substitui uma avaliação de um profissional de saúde.</p>
    </section>
  );
}

export default Saude;
