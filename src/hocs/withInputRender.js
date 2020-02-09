import React from 'react';

const isInlineLabel = inputType => inputType === 'radio' || inputType === 'checkbox';

export const withInputRender = Wrapper => ({input, label, children, meta, ...props}) => {
        return (
            <label>
                    {label}
                    <Wrapper {...input} {...props}  children={children} />
                    {meta.touched && meta.error && <span>{ meta.error }</span>}
            </label>
        );
};