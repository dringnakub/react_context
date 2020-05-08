import React from 'react'

export default function ArticlesView({ article }) {
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
    )
}
