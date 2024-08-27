import React from 'react'

const SuggestionList = ({suggestions,highlight,onSelect}) => {
    const highlightsuggestions = (suggtext)=>{
        const reg = new RegExp(`(${highlight})`,"gi")

       
       const parts = suggtext.split(reg);
       return parts.map((part,ind)=>{
        return part.toLowerCase()===highlight.toLowerCase()?<strong key={ind}>{part}</strong>:part
       })
    }

  return (
    <>
        {suggestions?.map((suggestion,index)=>{
            
            return <li key={index} onClick={() => onSelect(suggestion.name)} >{highlightsuggestions(suggestion.name)}</li>
        })}
    </>
  )
}

export default SuggestionList