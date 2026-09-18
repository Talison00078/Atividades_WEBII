import { useState } from "react";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSumary";
function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "Estudar React",
      concluida: false
    },
    {
      id: 2,
      titulo: "Fazer atividade de JavaScript",
      concluida: false
    },
    {
      id: 3,
      titulo: "Revisar para a prova",
      concluida: false
    },
    {
      id: 4,
      titulo: "Estudar componentes",
      concluida: false
    }
  ]);

  function concluirTarefa(id) {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: true }
          : tarefa
      )
    );
  }

  function excluirTarefa(id) {
    setTarefas((prevTarefas) =>
      prevTarefas.filter((tarefa) => tarefa.id !== id)
    );
  }

  const tarefasPendentes = tarefas.filter(
    (tarefa) => !tarefa.concluida
  ).length;

  return (
    <main>
      <Header />

      <TaskSummary tarefas={tarefas} />

      <TaskList
        tarefas={tarefas}
        onConcluir={concluirTarefa}
        onExcluir={excluirTarefa}
      />

      {tarefasPendentes > 0 ? (
        <p>Você ainda possui tarefas pendentes.</p>
      ) : (
        <p>Todas as tarefas foram concluídas.</p>
      )}
    </main>
  );
}

export default App;