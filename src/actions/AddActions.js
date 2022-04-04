
import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value,
        onChange: event => setValue(event.target.value) },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddActions({onCreate}) {
    // const [value, setValue] = useState('')
    const input = useInputValue('')
    //хук вместо useState


    function submitHandler (event) {
        event.preventDefault()

        if(input.value().trim()) {  //если метод пустой
            onCreate(input.value)
            input.clear()
        }
    }
    return (
        <form className="formforadd" onSubmit={submitHandler}>
            <input {...input} />
            <button type="submit"> Add action</button>

        </form>
    )
}

AddActions.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddActions