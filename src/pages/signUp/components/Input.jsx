import React from 'react'

export default function Input({ legend, value, setValue }) {
    const test = (e) => {
        setValue(e.target.value)
        console.log(value)
    }
    return (
        <fieldset>
            <legend>{legend}</legend>
            <input type='text' value={value} onChange={test} />
        </fieldset>
    )
}
