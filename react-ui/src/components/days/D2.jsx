import React, {Component} from 'react'
import Article from '../Article'
import articles from '../Fixtures'


class D2 extends Component {
        state = {
            isOpen1 : true,
            isOpen2: true
        }
    
    render () {
        const a1 = this.state.isOpen1 && <Article article={articles[2]}/>
        const a2 = this.state.isOpen2 && <Article article={articles[3]}/>
        return (
            <div className="container bg-light">
                <h2 className="h2">Day 2</h2>
                <p>Today I try connect json-file at article. As data file may be any json-file or datas from server</p>
                {a1}<button className="btn btn-primary" onClick={this.handleClick}>{this.state.isOpen1 ? 'первая кнопка: закрыть' : 'первая кнопка: открыть'}</button>
                {a2}<button className="btn btn-secondary" onClick={this.handlerClickSecond}>{this.state.isOpen2 ? 'вторая кнопка: закрыть' : 'вторая кнопка: открыть'}</button>
            </div>
            
        )
    }

 handleClick = () => {
   
    this.setState({
        isOpen1: !this.state.isOpen1
        
    })
}

handlerClickSecond = () => {

    this.setState({
        isOpen2: !this.state.isOpen2
    })
}
}
export default D2