import React, {Component} from 'react'

class D3 extends Component {
    state = {
        isOpen: false
    }
    render() {
        
        const namesList = [
            {
                name: "Alex",
                lastname: "Zubritsky"
            },
            {
                name: "Mike",
                lastname: "Vazovsky"
            }
        ]
        const firstArticle = this.state.isOpen && <span> {namesList[0].lastname}</span>
        return (
            <div>
                <h1 className="h1">Day 3 - states</h1>
                <ol className="list-group list-group-flush">
                    <li className="list-group-item">{namesList[0].name} {firstArticle}<button className="btn btn-outline-success ml-3" onClick={this.handleClick}>{this.state.isOpen ? 'close' : 'open'}</button></li>
                    <li className="list-group-item">{namesList[1].name} {namesList[1].lastname}</li>
                </ol>
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default D3