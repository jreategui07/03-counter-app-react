import React from 'react';
import ReactDOM from 'react-dom';

import PrimeraApp from './PrimeraApp';
import './index.css';

ReactDOM.render(<PrimeraApp saludo="Hola props!" anio={ 2020 } />, document.querySelector('#root'));
