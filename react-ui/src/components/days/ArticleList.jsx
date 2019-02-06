import React from 'react'
import Article from '../Article'

export default function ArticleList ({articles}) {
    const ArticleElements = articles.map((article, index) => 
       <Article article={article} defaultOpen = {index===1}/>
    )
    return (
        <p>{ArticleElements}</p>
    )

}