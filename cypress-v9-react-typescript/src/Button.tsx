import React from 'react'

const Button = ({children = 'Test button'}) => {
    return (
        <button type="button" onClick={() => console.log('test')}>{children}</button>
    )
}
export default Button;