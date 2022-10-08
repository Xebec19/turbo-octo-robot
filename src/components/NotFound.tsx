import React from 'react'
import { Typography } from "@mui/material"

export const NotFound = () => {
    return <Typography variant="h3" style={{textAlign:'center'}}>Page Not Found!</Typography>
}

export default React.memo(NotFound)