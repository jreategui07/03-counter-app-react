import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

ReactDOM.render(<CounterApp value={ 10 } />, document.querySelector('#root'));
