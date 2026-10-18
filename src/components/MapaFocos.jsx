import { useState } from "react";
import mapa from "../assets/recifemap.jpeg";
import areasMapa, { rotulosNivel } from "../data/areasMapa";

function MapaFocos() {
  const [areaSelecionada, setAreaSelecionada] = useState(null);

  return (
    <section className="mapa-bloco">
      <div className="mapa-imagem">
        <img src={mapa} alt="Mapa ilustrativo de uma região próxima ao Derby, no Recife, com pontos de foco" />
        <p className="fonte">Mapa ilustrativo: os pontos não representam dados reais.</p>
      </div>

      <div className="mapa-areas">
        <h2>Áreas em destaque</h2>
        <div className="areas-lista">
          {areasMapa.map((area) => (
            <button
              key={area.id}
              className={`area-botao nivel-${area.nivel}${areaSelecionada?.id === area.id ? " selecionada" : ""}`}
              onClick={() => setAreaSelecionada(area)}
            >
              <span className="area-ponto"></span>
              {area.nome}
            </button>
          ))}
        </div>

        <div className="area-painel">
          {areaSelecionada ? (
            <>
              <strong>{areaSelecionada.nome}</strong>
              <span className={`area-selo nivel-${areaSelecionada.nivel}`}>
                {rotulosNivel[areaSelecionada.nivel]}
              </span>
              <p>{areaSelecionada.dica}</p>
            </>
          ) : (
            <p>Clique em uma área para ver o nível de foco e uma dica de prevenção.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default MapaFocos;
