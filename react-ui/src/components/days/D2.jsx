import React, {Component} from 'react'
import Article from '../Article'
import articles from '../Fixtures'


class D2 extends Component {
        state = {
            isOpen : false
        }
    
    render () {
        const a1 = this.state.isOpen && <Article article={articles[2]}/>
        return (
            <div className="container bg-light">
                <h2 className="h2">Day 2</h2>
                <p>Today I try connect json-file at article. As data file may be any json-file or datas from server</p>
                {a1}
                <button onClick={this.handleClick}>
                {this.state.isOpen ? 'Close' : 'Open'}
                </button>
                <Article article={articles[3]}/>
                <Article article={articles[4]}/>
                <Article article={articles[5]}/>
            </div>
            
        )
    }

 handleClick = () => {
   
    this.setState({
        isOpen: !this.state.isOpen
    })
}
}
export default D2