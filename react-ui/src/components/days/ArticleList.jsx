import React from 'react'
import Article from '../Article'

export default function ArticleList ({articles}) {
    const ArticleElements = articles.map(article => 
       <Article article={article}/>
    )
    return (
        
            <p>{ArticleElements}</p>
        
    )

}