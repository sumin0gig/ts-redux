import React from 'react';
import './App.css';
import CounterCon from './containers/CounterCon';
import TodosCon from './containers/TodosCon';


// interface Person{
//   name:string
// }
// const person1:Person={
//   name:"green"
// }
// const person2= {name:"green", age:30} as Person;

function App() {
  return (
    <div className="App">
      <CounterCon/>
      <TodosCon/>
    </div>
  );
}

export default App;
