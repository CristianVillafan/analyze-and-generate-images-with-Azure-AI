import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AnalizeImage from './azure-image-analysis';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AnalizeImage />, document.getElementById('root'));
