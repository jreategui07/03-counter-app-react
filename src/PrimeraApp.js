import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, anio }) => {

    console.log(saludo)

    return (
        <>
            <h1>{ saludo } { anio }</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Aprendiento React...</p>
        </>
    );
}

PrimeraApp.prototypes = {
    saludo: PropTypes.string.isRequired,
    anio: PropTypes.number.isRequired,
}

export default PrimeraApp;
