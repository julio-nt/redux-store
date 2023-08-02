import React from 'react'
import * as Styled from './styles'

export default function Input({ legend, value, setValue, type }) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <p>{legend}:</p>
            <Styled.Input type={type} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
