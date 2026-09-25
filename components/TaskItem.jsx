import classes from "./TaskItem.module.css";

function TaskItem({
  titulo,
  concluida,
  onConcluir,
  onExcluir
}) {
  return (
    <div
      className={`${classes.task} ${
        concluida ? classes.completedTask : ""
      }`}
    >
      <div className={classes.info}>
        <h3
          className={`${classes.title} ${
            concluida ? classes.completedTitle : ""
          }`}
        >
          {titulo}
        </h3>

        <p
          className={`${classes.status} ${
            concluida
              ? classes.statusCompleted
              : classes.statusPending
          }`}
        >
          {concluida ? "✓ Concluída" : "● Pendente"}
        </p>
      </div>

      <div className={classes.actions}>
        {!concluida && (
          <button
            className={classes.completeButton}
            onClick={onConcluir}
          >
            Concluir
          </button>
        )}

        <button
          className={classes.deleteButton}
          onClick={onExcluir}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
