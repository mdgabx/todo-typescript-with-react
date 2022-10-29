import { Todo } from "../model";
import SingleTodo from './SingleTodo';

interface Props {
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todoList, setTodoList } : Props) => {
    console.log(todoList, setTodoList);
   
    return ( 
        <div className="container flex flex-col md:flex-row justify-center items-center">
            <div className="todos flex bg-teal-800 mx-2 p-4 rounded-xl justify-evenly w-6/12 md:w-4/12 flex-wrap mt-4">
                <span className="todolist__header--text text-white">Active Tasks</span>
                {todoList.map((todo) => {
                return(
                    <SingleTodo todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList} />
                ) 
                })}
            </div>
            <div className="todos remove flex bg-rose-800 mx-2 p-4 rounded-xl justify-evenly w-6/12 md:w-4/12 mt-4 flex-wrap ">
            <span className="todolist__header--text text-white">Completed Tasks</span>
                {todoList.map((todo) => {
                    return(
                        <SingleTodo todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList} />
                    ) 
                    })}
            </div>
        </div>

        
     );
}
 
export default TodoList;