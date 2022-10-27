import React from 'react'

const InputField = () => {
  return (
    <form className="input flex w-11/12 relative items-center">
        <input 
            className="input__box w-full rounded-full py-3 text-xl border-none ease-in duration-300 px-4 shadow-[0_0_10px_1000px_rgba(0,0,0,0.6)] focus:outline-none focus:shadow-2xl" 
            type="input" 
            placeholder="Enter a task"  />
        <button className="input__submit absolute my-3 mx-3 rounded-full right-0 border-none text-xl bg-sky-800 text-white transition-all duration-1000 px-4 py-2
            shadow-xl hover:scale-95" type="submit">
            Go
        </button>
    </form>
  )
}

export default InputField