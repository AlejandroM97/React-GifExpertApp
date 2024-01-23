import React, { useState } from 'react'
import { GifExpertApp } from '../GifExpertApp'



export const AddCategory = ({OnNewCategory}) => {
    
    const [inputValue, setinputValue] = useState('')




    const OnInputChange = (event) => {

    
        setinputValue(event.target.value)
        console.log(inputValue)
    }



    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length<=1) return;
        setinputValue('')
        OnNewCategory(inputValue.trim())
       
       
    }



    return (

        <form onSubmit={(event)=>onSubmit(event)}>
            <input

                type='text'
                placeholder='buscar Giphs'
                value={inputValue}
                onChange={OnInputChange}
            />
        </form>
    )
}
