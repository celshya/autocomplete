import React, { useCallback, useState } from 'react'
import SuggestionList from './SuggestionList'
import debounce from 'lodash/debounce'

const Autocomplete = () => {
const [inputValue,setInputValue] = useState("")
const [suggestions,setSuggestions] = useState([])
const [selectedMessage, setSelectedMessage] = useState("");



const fetchSuggestions = async(query)=>{
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
    const result = await res.json()
    console.log(result.recipes)
    setSuggestions(result.recipes)
}

    const handleChange = (e)=>{
        setInputValue(e.target.value)

        debounceSearch(e.target.value)
    }

    const debounceSearch = useCallback(debounce(fetchSuggestions,500),[fetchSuggestions])
    const handleSelectSuggestion = (suggestionName) => {
        setInputValue(suggestionName);
        setSuggestions([]);
        setSelectedMessage(`Your recipe for "${suggestionName}" is ready!`); 
    };

  return (
    <div className="autocomplete-container">
    <h2>Autocomplete/TypeAhead Component</h2>
    <div>

    <input type="text" placeholder='Enter Recipes..'  className="autocomplete-input" value={inputValue}  onChange={handleChange} />

    <ul className="suggestion-list">
        <SuggestionList suggestions={suggestions} highlight={inputValue} onSelect={handleSelectSuggestion}/>
    </ul>
    </div>
    {selectedMessage && <div className="selected-message">{selectedMessage}</div>}
    </div>
  )
}

export default Autocomplete