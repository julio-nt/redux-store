import React from 'react'
import * as Styled from './styles'

export default function Input({ legend, value, setValue, type, required }) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <p>{legend} {required ? <Styled.Required>*</Styled.Required> : null}</p>
            <Styled.Input type={type} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
