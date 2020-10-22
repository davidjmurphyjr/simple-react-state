import React from 'react';
import './App.css';
import {action} from './action'

function App({viewModel}) {
  return (
    <div className="App">
      <div>value: {viewModel.value}</div>
      <div>
        <input
          value={viewModel.value}
          onChange={ action(e => viewModel.updateValue(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App;
