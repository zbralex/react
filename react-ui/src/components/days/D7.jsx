import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../Fixtures'
class D7 extends Component {
    render() {
        return (
            <p><ArticleList articles={articles} /></p>
        )
    }
}
export default D7