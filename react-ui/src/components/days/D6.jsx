import React, {Component} from 'react'

class D6 extends Component {
    state = {
        isOpen: true
    }
    render () {
        const dayIsToday = 'Day 6'
        const openText = this.state.isOpen && <p className="text-muted">{this.props.text}</p>
        return (
            <div>
                <h1 className="h1 bg-primary p-3">{dayIsToday}</h1>
                <p>
                    <h2 className="h2">{this.props.title}</h2> 
                        <button className="btn btn-info m-1 px-5" onClick={this.clickHandler}>{this.state.isOpen ? 'close' : 'open'}</button>
                    <div>{openText}</div>
                </p>
            </div>
        )
    }
    clickHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
}
D6.defaultProps = {title:'Заголовок', text: "Какой-то текст"}
export default D6