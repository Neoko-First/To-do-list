export async function fetchTodos() {
  const response = await fetch("/api/todos");
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
}

export async function addTodo(task: string) {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({ task }),
  });
  if (!response.ok) {
    throw new Error("Failed to add todo");
  }
  return response.json();
}

export async function toggleTodo(id: number) {
  const response = await fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: true }),
  });
  if (!response.ok) {
    throw new Error("Failed to toggle todo");
  }
  return response.json();
}

export async function deleteTodo(id: number) {
  const response = await fetch(`/api/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
  return response.json();
}