import { Todo } from "../model";
import SingleTodo from './SingleTodo';

interface Props {
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todoList, setTodoList } : Props) => {
    console.log(todoList, setTodoList);
   
    return ( 
        <div className="todos flex justify-evenly w-8/12 flex-wrap">
            {todoList.map((todo) => {
               return(
                <SingleTodo todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList} />
               ) 
            })}
        </div>
     );
}
 
export default TodoList;