import {TextField } from '@mui/material';

export const InputElm: React.FC<{label:string, type:string, helperText?:string, required?:boolean}> = (props) => {
    return (
        <TextField {...props}>
        </TextField>
    )
}