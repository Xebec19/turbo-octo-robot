import { PropsWithChildren } from "react";
import { Button } from '@mui/material'

export const ButtonMid:React.FC<PropsWithChildren> = (props) => {
    return <Button size='medium'>{props.children}</Button>
}