import TaskItem from "./TaskItem";

function TaskList({ tarefas, onConcluir, onExcluir }) {
  return (
    <section>
      <h2>Lista de tarefas</h2>

      {tarefas.map((tarefa) => (
        <TaskItem
          key={tarefa.id}
          titulo={tarefa.titulo}
          concluida={tarefa.concluida}
          onConcluir={() => onConcluir(tarefa.id)}
          onExcluir={() => onExcluir(tarefa.id)}
        />
      ))}
    </section>
  );
}

export default TaskList;