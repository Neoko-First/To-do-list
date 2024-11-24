import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[]; // Liste de tâches
  onToggle: (id: number) => void; // Fonction pour marquer une tâche comme terminée
  onDelete: (id: number) => void; // Fonction pour supprimer une tâche
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => (
  <div className="flex flex-col gap-2">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        task={todo.task}
        completed={todo.completed}
        onToggle={() => onToggle(todo.id)}
        onDelete={() => onDelete(todo.id)}
      />
    ))}
  </div>
);

export default TodoList;
