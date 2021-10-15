import { Button } from '@mui/material';
import React from 'react'

const Test = (props)=>{
    return(
        <div>
            <Button onClick={()=>{console.log(props.message)}}>Test Button</Button>
        </div>
    )
}
export default Test;