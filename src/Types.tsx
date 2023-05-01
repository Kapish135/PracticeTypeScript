import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Types: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id: number) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{listStyle:"none"}}>
            <span style={{marginRight:"5rem"}}>{todo.id}</span>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            {!todo.completed && <button onClick={() => completeTodo(todo.id)}>Complete</button>}
          </li>
        ))}
      </ul>
      <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const textValue = document.querySelector<HTMLInputElement>('input[name="todoText"]');
        const text:any = textValue?.value;
        addTodo(text);
        e.currentTarget.reset();
      }}>
        <input type="text" name="todoText" placeholder="Enter a new todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Types;
