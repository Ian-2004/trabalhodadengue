function ResumoCard({ numero, titulo, texto }) {
  return (
    <article className="resumo-card">
      <span className="numero-card">{numero}</span>
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </article>
  );
}

export default ResumoCard;
