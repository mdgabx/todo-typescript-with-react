import React,  { useRef } from 'react'

interface Props  {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAdd  } : Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input flex w-8/12 relative items-center" onSubmit={(e) => { 
      handleAdd(e)
      inputRef.current?.blur()  
      }}>
        <input 
            ref={inputRef}
            className="input__box w-full rounded-full py-3 text-xl border-none ease-in duration-300 px-4 shadow-black shadow-2xl focus:outline-none focus:shadow-2xl" 
            type="input" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task"  />
        <button className="input__submit absolute my-3 mx-3 rounded-full right-0 border-none text-xl bg-sky-800 text-white transition-all duration-1000 px-4 py-2
            shadow-md shadow-black hover:scale-95" type="submit" >
            Go
        </button>
    </form>
  )
}

export default InputField