import { MoreHorizontal, Trash } from "lucide-react";
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
  task: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  completed,
  onToggle,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-2 py-1 pl-3 hover:bg-muted rounded-md transition-all cursor-pointer">
      <Checkbox id="terms" checked={completed} onChange={onToggle} />
      <span
        className={`flex-1 ${completed ? "line-through text-gray-500" : ""}`}
        onClick={onToggle}
      >
        {task}
      </span>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuGroup>
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
