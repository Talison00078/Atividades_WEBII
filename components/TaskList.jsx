import classes from "./TaskList.module.css";
import TaskItem from "./TaskItem";

function TaskList({
  tarefas,
  onConcluir,
  onExcluir
}) {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h2 className={classes.title}>
          Lista de tarefas
        </h2>

        <span className={classes.count}>
          {tarefas.length}{" "}
          {tarefas.length === 1 ? "tarefa" : "tarefas"}
        </span>
      </div>

      {tarefas.length === 0 ? (
        <div className={classes.empty}>
          <p>Nenhuma tarefa cadastrada.</p>
        </div>
      ) : (
        <div className={classes.list}>
          {tarefas.map((tarefa) => (
            <TaskItem
              key={tarefa.id}
              titulo={tarefa.titulo}
              concluida={tarefa.concluida}
              onConcluir={() =>
                onConcluir(tarefa.id)
              }
              onExcluir={() =>
                onExcluir(tarefa.id)
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TaskList;
