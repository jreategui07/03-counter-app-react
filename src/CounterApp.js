import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [ counter, setConunter ] = useState(value);
    
    const handleAdd = (e) => {
        setConunter(counter +1);
        // setConunter((c) => c + 1);
    }

    const handleSubtract = (e) => {
        setConunter(counter -1);
        // setConunter((c) => c - 1);
    }

    const handleReset = (e) => {
        setConunter(value);
        // setConunter((c) => value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd } >+1</button>
            <button onClick={ handleSubtract } >-1</button>
            <button onClick={ handleReset } >Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp
