import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../Fixtures'

class D8 extends Component {
    render () {
        return (
            <div>
                <h1 className="">Day 8 </h1>
                <ArticleList articles={articles} />
            </div>
            
        )
    }
}

export default D8