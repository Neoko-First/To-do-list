"use client";
import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

interface Todo {
  id: number; // Identifiant unique
  task: string; // Texte de la tâche
  completed: boolean; // Statut de la tâche
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  // Charger les tâches depuis localStorage
  useEffect(() => {
    const loadTodos = () => {
      setLoading(true);
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos)); // Charger les todos depuis localStorage
      }
      setLoading(false);
    };

    loadTodos();
  }, []);

  // Sauvegarder les todos dans localStorage à chaque mise à jour
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos)); // Sauvegarder dans localStorage
    }
  }, [todos]);

  const handleAddTodo = (task: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      task,
      completed: false,
    };

    // Mettre à jour les todos et sauvegarder dans localStorage
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    // Mettre à jour l'état de la tâche (complétée ou non) et sauvegarder dans localStorage
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    // Supprimer la tâche et sauvegarder dans localStorage
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={handleAddTodo} />
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      )}
    </>
  );
};

export default Home;
