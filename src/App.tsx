import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names=[
      {name: "Arina", age: 29},
      {name: "Alex", age: 33},
      {name: "Dasha", age: 7},
  ]

    const nameNew=names.map(n => <li>{n.name}</li>)
    const ages=names.map(n => <li>{n.age}</li>)
  return (
    <div className="App">
      <ul>
          {nameNew}
          {ages}
      </ul>
    </div>
  );
}

export default App;
