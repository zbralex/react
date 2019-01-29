import React, {Component} from 'react'


class D3Hw extends Component {
    
    state = {
        isOpen: true
    }
    
    render() {
        const title = this.state.isOpen && <h1 className="h1">Day 3, homework</h1>
        return(
            <div>
                {title} <button className="btn btn-primary" onClick={this.handleClick}>{this.state.isOpen ? 'Close' : 'Open'}</button>
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
 
export default D3Hw