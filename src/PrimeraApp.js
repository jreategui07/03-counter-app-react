import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, anio, subtitulo }) => {

    console.log(saludo)

    return (
        <>
            <h1>{ saludo } { anio }</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    anio: PropTypes.number.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
