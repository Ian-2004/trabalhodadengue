function ChecklistItem({ tarefa, marcada, onAlternar }) {
  return (
    <label className="tarefa">
      <input type="checkbox" checked={marcada} onChange={() => onAlternar(tarefa)} />
      <span>{tarefa}</span>
    </label>
  );
}

export default ChecklistItem;
