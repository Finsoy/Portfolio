import React from 'react';

const Button = (props: {color: string, text: string}) => (
    <button type="button" className={`btn btn-${props.color}`}>{props.text}</button>
)


export default Button;
