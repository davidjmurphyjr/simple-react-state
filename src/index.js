import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ViewModel} from "./ViewModel";

const viewModel = new ViewModel();
export const render = () => ReactDOM.render(<App viewModel={viewModel}/>, document.getElementById('root'));
render();

