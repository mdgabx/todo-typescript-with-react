import { Todo } from '../../src/model';
import React, { useState } from 'react';
import { FiCheck, FiDelete, FiEdit3 } from 'react-icons/fi';

interface Props {
    todo: Todo,
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
};


const SingleTodo = ({todo, todoList, setTodoList}: Props) => {
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

        // setTodoList(todoList.map((todo) => {
        //    return todo.id === id ? {...todo, todo: editTodo} : todo;
        // })
    }

    return (
        <form className="todos__single flex w-11/12 p-4 bg-amber-400 rounded-[5px] mt-4" onSubmit={(e) => handleEdit(e, todo.id)}> 
            {
                edit ? (
                        <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} 
                            className="todos__single--text flex grow p-2 text-xl outline-none"
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
      );
}
 
export default SingleTodo;