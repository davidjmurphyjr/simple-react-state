import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ViewModel} from "./ViewModel";

let viewModel = null;
export const render = () => ReactDOM.render(<App viewModel={viewModel}/>, document.getElementById('root'));
viewModel = new ViewModel();
render();

