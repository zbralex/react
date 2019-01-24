import React, {Component} from 'react'

class D4 extends Component{
    render() {
        return(
            <div className="">
            <h1 className="h1">Day 4 - props</h1>
                <div className="">{this.props.name}</div>
                <div className="">{this.props.age}</div>
            </div>
        )
    }
}
D4.defaultProps  = {name: "Name", age: "Age"}
export default D4