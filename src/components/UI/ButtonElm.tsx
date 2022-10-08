import { PropsWithChildren } from "react";
import { Button } from '@mui/material'

export const ButtonElm:React.FC<PropsWithChildren> = (props) => {
    return <Button size='small'>{props.children}</Button>
}