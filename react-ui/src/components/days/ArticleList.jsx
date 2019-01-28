import React from 'react'
import Article from '../Article'
import fixtures from '../Fixtures'

export default function ArticleList({articles}) {
    const articleElements  = articles.map(article =>
            <li key={fixtures.id}><Article article={article} /></li>
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}