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

export default CartaoFoco;
