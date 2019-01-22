import React, {Component} from 'react'

class Article extends Component {
    render() {
        const {article} = this.props;
        return (
            <div>
                <h2 className="h2">{article.title}</h2>
                <p className="text-secondary">{article.text}</p>
            </div>
        )
    }
}

export default Article