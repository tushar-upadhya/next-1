"use client";

import { useState } from "react";

import { ItodoObject } from "./interfaces/Itodo";

import { v4 as uuid } from "uuid";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<ItodoObject[]>([]);

  const handleTodo = () => {
    setTodos([...todos, { id: uuid(), value: todo, done: false }]);

    setTodo("");
  };

  const handleDone = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <header className="bg-slate-800 p-4">
        <h1 className="text-2xl">Todo</h1>
      </header>

      <main className="p-4">
        <input
          type="text"
          placeholder="Enter a task"
          className="p-2 rounded mr-5 text-slate-900"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />

        <button className="border-2 p-2 rounded" onClick={() => handleTodo()}>
          Add
        </button>

        <ul className="mt-5">
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className={`text-3xl ml-5 cursor-pointer ${
                  todo.done ? "line-through" : "no-underline"
                }`}
                onClick={() => handleDone(todo.id)}
              >
                {todo.value}
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
export default Home;
