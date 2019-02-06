import React, {Component} from 'react'


class D7 extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
    render() {
        const hiddenText = this.state.isOpen && <p className="card-text">{this.props.text}</p>
        return(
            <div className="card">
                <div className="card-header">
                    <h2 className="h2">{this.props.title}</h2>
                </div>
                <div className="card-body">
                    {hiddenText}
                    <button className="btn btn-primary" onClick={this.clickHandler}>{this.state.isOpen ? 'Close' : 'Open'}</button>
                </div>
            </div>
        )
    }
    clickHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
D7.defaultProps = {title: 'some title', text: 'some text'}
export default D7