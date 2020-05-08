import React, { useState, useContext } from 'react'
import { ArticleContext } from '../../../context/articleContext';

export default function AddArticle() {
    const [article, setArticle] = useState([]);
    const { dispatch } = useContext(ArticleContext)


    const addArticle = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_ARTICLE", article})
    }

    const handleChange = (e) => {
        setArticle({
            ...article, [e.target.id]: e.target.value
        });
    }


    return (
        <form onSubmit={addArticle}>
            <label>Title : </label>
            <input type="text" id="title" onChange={handleChange} />
            <label>Body : </label>
            <input type="text" id="body" onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}
