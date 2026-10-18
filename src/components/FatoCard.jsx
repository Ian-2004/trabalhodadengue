function FatoCard({ titulo, texto }) {
  return (
    <article className="fato">
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </article>
  );
}

export default FatoCard;
