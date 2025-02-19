import React, { useState, useEffect } from "react"

function SearchBar() {
    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = () => {
        
    }

    return (
        <div>
            <input 
                onChange={handleChange} 
                value={input} 
                name="parameter" 
                id="parameter"
                type="text" 
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default SearchBar;