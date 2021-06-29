import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useBookSearch(query, pagenumber) {
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(false)
    const [books , setBooks] = useState([])
    const [hasmore , setHasmore] = useState(false)
    
    useEffect(() => {
        // clear state evrytime query change
        setBooks([])
    },[query])

    useEffect(() => {
        setLoading(true)
        setError(false)

        let cancel
        axios({
            method: 'GET',
            url: 'https://openlibrary.org/search.json',
            params: {q: query, page: pagenumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setBooks(prevBooks => {
                // push array by combining previos state
                // convert to Set and convert back to array
                return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
            })
            setHasmore(res.data.docs.length > 0)
            setLoading(false)
            // console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return null
            setError(true)
        })
        return () => cancel()
    },[query, pagenumber])

    return {loading, error, books, hasmore}
}
