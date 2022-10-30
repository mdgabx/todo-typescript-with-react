import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import SingleTodo from './SingleTodo';

interface Props {
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodo: Todo[],
    setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList = ({ todoList, setTodoList, completedTodo, setCompletedTodo } : Props) => {
   
    return ( 
        <div className="container flex flex-col md:flex-row justify-center items-start">
           <Droppable droppableId="TodosList">
                {   
                    (provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="todos flex bg-teal-800 md:mx-2 p-4 rounded-xl justify-evenly w-11/12 mx-auto md:w-4/12 flex-wrap mt-4">
                            <span className="todolist__header--text text-white">Active Tasks</span>
                            {todoList.map((todo, index) => {
                            return(
                                <SingleTodo index={index} todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList} />
                            ) 
                            })}

                            {provided.placeholder}
                        </div>
                    )
                }
           </Droppable>

           <Droppable droppableId="TodosCompleted">
                {
                    (provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps } className="todos remove flex bg-rose-800 md:mx-2 p-4 rounded-xl justify-evenly w-11/12 mx-auto md:w-4/12 mt-4 flex-wrap ">
                            <span className="todolist__header--text text-white">Completed Tasks</span>
                            {completedTodo.map((todo, index) => {
                            return(
                                <SingleTodo index={index} todo={todo} key={todo.id} todoList={completedTodo} setTodoList={setCompletedTodo} />
                            ) 
                            })}
                    
                    {provided.placeholder}
                        </div>
                    )
                }
           </Droppable>
        </div>

        
     );
}
 
export default TodoList;