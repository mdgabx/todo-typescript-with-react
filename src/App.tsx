import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodoList([...todoList, {id: Date.now(), todo, isDone: false} ])
      setTodo("");
    }
  
  };

  
  return (
    <div className="App bg-blue-600 w-screen h-screen flex flex-col items-center">
      <h1 className="uppercase text-[35px] md:text-[40px] text-white my-8 md:my-10 z-[1] text-center">
        TODO Board
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}  />
    </div>
  );
}

export default App;
