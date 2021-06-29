import React, {useState, useRef, useCallback} from 'react'
import useBookSearch from '../util/useBookSearch'

export default function InfinityScroll() {
    const [query, setQuery] = useState('')
    const [pagenumber, setPagenumber] = useState(1)
    // extract variable from function
    const {books, hasmore, loading, error} = useBookSearch(query, pagenumber)
    
    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return null
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            // IntersectionObserver API
            // detect when lastElement visible in viewport
            if (entries[0].isIntersecting && hasmore) {
                console.log("Visible")
                setPagenumber(prevpagenumber => prevpagenumber +1)
            }
        })
        if (node) observer.current.observe(node)
        console.log("last book of each page",node)
    }, [loading, hasmore])

    const handleSearch = (e) => {
        // console.log("search")
        setQuery(e.target.value)
        setPagenumber(1)
    }

    return (
        <div className="container max-w-xl mx-auto p-3">
                <input onChange={handleSearch} className="w-full pl-3 rounded border-2 border-indigo-500" type="text" />

                <div>
                    {books.map((book, index) => {
                        if (books.length === index + 1) {
                            return <article ref={lastBookElementRef} className="block" key={book}><p>{book}</p></article>
                        }
                        return <article className="block" key={book}><p>{book}</p></article>
                    })}
                </div>

                <div>{loading && 'Loading...'}</div>
                <div>{error && 'Error...'}</div>
        </div>
    )
}
