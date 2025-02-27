'use client'

import { Button } from "@mui/material"

export default function PostButton(){

    function handleClick(){
        fetch('http://localhost:3000/examples', {method: 'POST'}).then((response) => {
            response.json().then((data)=>console.log({data}))
        }).catch(() => {
            console.log('An error occured')
        })
    }

    return (
        <Button data-Test="post-button" onClick={handleClick}>
            Post Data
        </Button>
    )
}