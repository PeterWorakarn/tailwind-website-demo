import React, { useState, useEffect } from 'react'

export default function SearchSuggestion() {
    const [Data, setData] = useState([])
    const [suggestion, setSuggestion] = useState([])
    const [text, setText] = useState(' ')
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => console.log(err));
    }, [])
    const onChangeHandler = (text) => {
        // Suggestion logic
        if (text.length > 0) {
            const matches = Data.filter((each) => {
                return each.title.toLowerCase().includes(text.toLowerCase())
            })
            setSuggestion(matches)
        }

        setText(text)
    }
    const onSuggestHandler = (text) => {
        setText(text)
        setSuggestion([])
    }
    return (
        <div>
            {/* onBlur for reset when click off use to be state like toggle */}
            <input 
                onBlur={() => {setSuggestion([])}}
                onChange={e => onChangeHandler(e.target.value)} value={text} type="text" />
            {suggestion && suggestion.map((suggest, i) => {
                return (
                    <div
                        onClick={() => onSuggestHandler(suggest.title)}
                        className="hover:bg-indigo-500 border border-gray-300 border-b-2"
                        key={i}>{suggest.title}</div>)
            })}
        </div>
    )
}
