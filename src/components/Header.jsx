const itens = [
  { id: "inicio", rotulo: "Início" },
  { id: "focos", rotulo: "Focos do mosquito" },
  { id: "prevencao", rotulo: "Prevenção e checklist" },
];

function Header({ tela, menuAberto, onMudarTela, onAlternarMenu }) {
  return (
    <header className="topo">
      <button className="logo" onClick={() => onMudarTela("inicio")} aria-label="Voltar para o início">
        <span className="logo-simbolo"></span>
        <span>Mosquito Brasil</span>
      </button>

      <button className="botao-menu" onClick={onAlternarMenu} aria-label="Abrir ou fechar menu">
        {menuAberto ? "Fechar ✕" : "Menu ☰"}
      </button>

      <nav className={menuAberto ? "menu aberto" : "menu"}>
        {itens.map((item) => (
          <button
            key={item.id}
            className={tela === item.id ? "ativo" : ""}
            onClick={() => onMudarTela(item.id)}
          >
            {item.rotulo}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
