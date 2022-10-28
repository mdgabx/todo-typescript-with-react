import { Todo } from '../../src/model';
import { FiCheck, FiDelete, FiEdit3 } from 'react-icons/fi';

interface Props {
    todo: Todo,
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
};


const SingleTodo = ({todo, todoList, setTodoList}: Props) => {
    
    const handleDone = ( id : number ) => {
        setTodoList(
            todoList.map((todo) => {
                return todo.id === id ? {...todo, isDone: !todo.isDone} : todo;
                }   
            )
        )
    };

    const handleDelete = ( id: number ) => {

    };

    return (
        <form className="todos__single flex w-11/12 p-4 bg-white rounded-[5px] mt-4">
            { todo.isDone === true ? (
                <s className="todos__single--text flex grow p-2 border-none text-xl">
                    {todo.todo}
                </s>
                ) : (
                <span className="todos__single--text flex grow p-2 border-none text-xl">
                    {todo.todo}
                </span>
                )
            }
            
            {/*             
                        <span className="todos__single--text flex grow p-2 border-none text-xl">
                            {todo.todo}
                        </span> */}
            <div className="flex flex-row justify-center items-center">
                <span className="icon ml-2 text-xl cursor-pointer">
                    <FiEdit3 />
                </span>
                <span className="icon ml-2 text-xl cursor-pointer">
                    <FiDelete onClick={() => handleDone(todo.id)} />
                </span>
                <span className="icon ml-2 text-xl cursor-pointer">
                    <FiCheck onClick={() => handleDone(todo.id)} />
                </span>
              
            </div>
        </form>
      );
}
 
export default SingleTodo;