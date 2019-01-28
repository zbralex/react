import React, {Component} from 'react'

class D6 extends Component {
    render () {
        const dayIsToday = 'Day 6'
        return (
            <div>
                <h1 className="h1 bg-primary p-3">{dayIsToday}</h1>
                <p>{this.props.name} <span className="text-muted">{this.props.age}</span></p>
                <p className="text-muted">{this.props.text}</p>
            </div>
        )
    }
}
D6.defaultProps = {name:'Ivan', age: 18}
export default D6