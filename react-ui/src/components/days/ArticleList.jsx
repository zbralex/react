import React from 'react'
import Article from '../Article'

export default function ArticleList ({articles}) {
    const ArticleElements = articles.map(article => 
        <li><Article article={article}/></li>
    )
    return (
        <ul>
            {ArticleElements}
        </ul>
    )

}