import React, {Component} from 'react'
import Article from '../Article'
import articles from '../Fixtures'


class D2 extends Component {
    render () {
        return (
            <div className="container bg-light">
                <h2 className="h2">Day 2</h2>
                <p>Today I try connect json-file at article. As data file may be any json-file or datas from server</p>
                <Article article={articles[2]}/>
                <button onClick={onClikHandle}>Click</button>
                <Article article={articles[3]}/>
                <Article article={articles[4]}/>
                <Article article={articles[5]}/>
            </div>
            
        )
    }
}



function onClikHandle() {
    console.log('**************************');
}
export default D2