import React, { useState, useContext } from 'react'
import ArticlesView from '../view/ArticlesView';
import { ArticleContext } from '../../../context/articleContext';


export default function Articles() {
    const { articles } = useContext(ArticleContext);

    console.log(articles)
    return (
        <div>
            {articles.map(article => (
                <ArticlesView key={article.id} article={article} />
            ))}
        </div>
    )
}
