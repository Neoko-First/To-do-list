import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// Définir les types des props
interface TodoFormProps {
  onAdd: (task: string) => void; // onAdd est une fonction qui prend un string et ne retourne rien
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [task, setTask] = useState<string>(""); // La tâche est une chaîne de caractères

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Ajouter une tâche"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" className="btn-primary">
        Ajouter
      </Button>
    </form>
  );
};

export default TodoForm;
