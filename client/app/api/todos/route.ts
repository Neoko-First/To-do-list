import { NextResponse } from "next/server";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

// Simuler une base de données en mémoire
let todos: Todo[] = [];

// Gestion des requêtes GET et POST
export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.task) {
    return NextResponse.json({ error: "Task is required" }, { status: 400 });
  }

  const newTodo: Todo = {
    id: Date.now(),
    task: body.task,
    completed: false,
  };

  todos.push(newTodo);

  return NextResponse.json(newTodo, { status: 201 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  todos = todos.filter((todo) => todo.id !== id);
  return NextResponse.json({ success: true });
}

export async function PATCH(req: Request) {
  const { id, completed } = await req.json();

  todos = todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
  return NextResponse.json({ success: true });
}