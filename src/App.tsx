import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [completedTodo, setCompletedTodo] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodoList([...todoList, {id: Date.now(), todo, isDone: false} ])
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination}  = result;

    if(!destination) return;

    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add;
    let active = todoList;
    let complete = completedTodo;

    if(source.droppableId === "TodosList") {
      add=active[source.index];
      active.splice(source.index, 1);
    } else  {
      add=complete[source.index];
      complete.splice(source.index, 1);
    }

    if(destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else  {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodo(complete);
    setTodoList(active);

  }

  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App bg-emerald-600 w-screen h-screen flex flex-col items-center">
      <h1 className="uppercase text-[35px] md:text-[40px] text-white my-8 md:my-10 z-[1] text-center">
        TODO Board
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}  />
      <TodoList todoList={todoList} setTodoList={setTodoList} completedTodo={completedTodo} setCompletedTodo={setCompletedTodo}  />
    </div>
    </DragDropContext>
    
  );
}

export default App;
