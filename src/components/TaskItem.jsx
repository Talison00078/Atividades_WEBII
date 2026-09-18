function TaskItem({ titulo, concluida, onConcluir, onExcluir }) {
  return (
    <div>
      <h3>{titulo}</h3>

      <p>
        Status: {concluida ? "Concluída" : "Pendente"}
      </p>

      {!concluida && (
        <button onClick={onConcluir}>
          Concluir
        </button>
      )}

      <button onClick={onExcluir}>
        Excluir
      </button>
    </div>
  );
}

export default TaskItem;