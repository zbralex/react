import React from 'react'

function Article(props) {
    const {article} = props;
    return (
        <div>
            <h4 className="h4">{article.title}</h4>
            <p className="">{article.text}</p>
        </div>
    )
}

export default Article