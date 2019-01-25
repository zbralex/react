import React, {Component} from 'react'

class D5 extends Component {
    render() {
        return (
            <div>
                <h1 className="h1"> {this.props.header}</h1>
                <p className="">{this.props.text}</p>
            </div>
        )
    }
}
D5.defaultProps = {header: "Заголовок", text:"Текст"}
export default D5