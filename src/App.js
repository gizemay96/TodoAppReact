import React from 'react';
import './App.css';
import TodoForm from './widgets/TodoForm';
import TodoNav from './widgets/navbar';

function App() {
  return (
    <div className="App">
      <TodoNav />
      <div className="">
      <TodoForm />
      </div>
    </div>
  );
}

export default App;
