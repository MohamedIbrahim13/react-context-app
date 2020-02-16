import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ChangeTheme=()=> {
    const {ChangeTheme}=useContext(ThemeContext);
    return (
        <button onClick={ChangeTheme}>
            Change Theme 
        </button>
    )            
}

export default ChangeTheme
