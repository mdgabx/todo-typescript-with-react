import { Todo } from '../../src/model';
import React, { useState, useRef, useEffect } from 'react';
import { FiCheck, FiDelete, FiEdit3 } from 'react-icons/fi';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    todo: Todo,
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>,
    index: number
};


const SingleTodo = ({todo, todoList, setTodoList, index}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo ] = useState<string>(todo.todo);

    
    const handleDone = ( id : number ) => {
        setTodoList(
            todoList.map((todo) => {
                return todo.id === id ? {...todo, isDone: !todo.isDone} : todo;
                }   
            )
        )
    };

    const handleDelete = ( id: number ) => {
        setTodoList(
            todoList.filter((todo) => {
                return todo.id !== id;
            })
        )
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodoList(todoList.map((todo) => {
            return todo.id === id ? {...todo, todo: editTodo} : todo;
        }));

        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

  
    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided) => (
                    <form {...provided.draggableProps}
                         {...provided.dragHandleProps}
                         ref={provided.innerRef}
                    className="todos__single hover:scale-105 ease-out hover:shadow-black flex w-11/12 p-4 bg-amber-400 rounded-[5px] mt-4" onSubmit={(e) => handleEdit(e, todo.id)}> 
                    {
                        edit ? (
                                <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} 
                                    className="todos__single--text flex grow p-2 text-xl outline-none"
                                    ref={inputRef}
                                />
        
                        ) : ( todo.isDone === true ? (
                                <s className="todos__single--text flex grow p-2 border-none text-xl">
                                    {todo.todo}
                                </s>
                                ) : (
                                <span className="todos__single--text flex grow p-2 border-none text-xl">
                                    {todo.todo}
                                </span>
                                )
                        )
                    }
        
                    <div className="flex flex-row justify-center items-center">
                        <span className="icon ml-2 text-xl cursor-pointer">
                            <FiEdit3 onClick={() => {
                                 if(!edit && !todo.isDone) {
                                    setEdit(!edit);
                                }
                            }
                            } />
                        
                        </span>
                        <span className="icon ml-2 text-xl cursor-pointer">
                            <FiDelete onClick={() => handleDelete(todo.id)} />
                        </span>
                        <span className="icon ml-2 text-xl cursor-pointer">
                            <FiCheck onClick={() => handleDone(todo.id)} />
                        </span>
                      
                    </div>
                </form>
                )
            }


          

        </Draggable>
      );
}
 
export default SingleTodo;