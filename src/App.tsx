import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App bg-blue-600 w-screen h-screen flex flex-col items-center">
      <h1 className="uppercase text-[35px] md:text-[40px] text-white my-8 md:my-10 z-[1] text-center">
        TODO Board
      </h1>
    </div>
  );
}

export default App;
