import classes from "./TaskSummary.module.css";

function TaskSummary({ tarefas }) {
  const total = tarefas.length;

  const concluidas = tarefas.filter(
    (tarefa) => tarefa.concluida
  ).length;

  const pendentes = total - concluidas;

  return (
    <section className={classes.summary}>
      <h2 className={classes.h2}>Resumo</h2>

      <div className={classes.stats}>
        <div className={`${classes.card} ${classes.total}`}>
          <span>Total</span>
          <strong>{total}</strong>
        </div>

        <div
          className={`${classes.card} ${classes.concluidas}`}
        >
          <span>Concluídas</span>
          <strong>{concluidas}</strong>
        </div>

        <div
          className={`${classes.card} ${classes.pendentes}`}
        >
          <span>Pendentes</span>
          <strong>{pendentes}</strong>
        </div>
      </div>
    </section>
  );
}

export default TaskSummary;
