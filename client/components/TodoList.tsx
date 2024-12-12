import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[]; // Liste de tâches
  setTodos: (todos: Todo[]) => void; // Fonction pour mettre à jour la liste des tâches
  onToggle: (id: number) => void; // Fonction pour marquer une tâche comme terminée
  onDelete: (id: number) => void; // Fonction pour supprimer une tâche
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  onToggle,
  onDelete,
}) => (
  <div className="flex flex-col gap-2">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        setTodos={setTodos}
        onToggle={() => onToggle(todo.id)}
        onDelete={() => onDelete(todo.id)}
      />
    ))}
  </div>
);

export default TodoList;
