"use client";
import { addTodo, deleteTodo, fetchTodos, toggleTodo } from "@/lib/api/todo";
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

  // Charger les tâches depuis le localStorage
  useEffect(() => {
    const loadTodos = async () => {
      setLoading(true);
      try {
        const todos = await fetchTodos();
        setTodos(todos);
      } catch (error) {
        console.error("Erreur lors du chargement des todos", error);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  const handleAddTodo = async (task: string) => {
    try {
      const newTodo = await addTodo(task);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la tâche", error);
    }
  };

  const handleToggleTodo = async (id: number) => {
    try {
      await toggleTodo(id);
    } catch (error) {
      console.error("Erreur lors du changement de statut de la tâche", error);
    } finally {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche", error);
    } finally {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
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
