import { TextField } from "@mui/material";
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    type: string,
    helperText?: string,
    required?: boolean
}

export const InputElm = React.forwardRef((props:InputProps,ref?:React.Ref<HTMLInputElement>) => {
    return <TextField ref={ref} label={props.label} helperText={props.helperText} required={props.required} variant="filled"></TextField>
})
