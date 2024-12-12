import { MoreHorizontal, Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

interface TodoItemProps {
  id: number;
  task: string;
  completed: boolean;
  setTodos: (todos: TodoItemProps[]) => void;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  task,
  completed,
  setTodos,
  onToggle,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleUpdate = (content: string) => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todos = JSON.parse(storedTodos);
      const updatedTodos = todos.map((todo: TodoItemProps) =>
        todo.id === id ? { ...todo, task: content } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 py-1 pl-3 hover:bg-muted rounded-md transition-all cursor-pointer">
      <Checkbox id="terms" checked={completed} onChange={onToggle} />
      {editing ? (
        <input
          type="text"
          value={task}
          onChange={(e) => handleUpdate(e.target.value)}
          onBlur={() => setEditing(false)}
          className="w-full"
        />
      ) : (
        <span
          className={`flex-1 ${completed ? "line-through text-gray-500" : ""}`}
          onClick={onToggle}
        >
          {task}
        </span>
      )}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setEditing(true)}>
              <Pen />
              Update
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600" onClick={onDelete}>
              <Trash />
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TodoItem;
