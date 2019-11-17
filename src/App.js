import React from 'react';
import './App.css';

function App({viewModel}) {
  return (
    <div className="App">
      <div>value: {viewModel.value}</div>
      <div><input value={viewModel.value} onChange={viewModel.updateValue}/></div>
    </div>
  );
}

export default App;
