import React, {Component} from 'react'

class Header extends Component {
    render() {
        const headerItems = {
            item_1: 'el 1',
            item_2: 'el 2',
            item_3: 'el 3',
            item_4: 'el 4'
        }
        return (
            <header className="container">
                <ul className="nav">
                    <li className="nav-item active"><a className="nav-link" href="#">{headerItems.item_1}</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">{headerItems.item_2}</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">{headerItems.item_3}</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">{headerItems.item_4}</a></li>
                </ul>
            </header>
        )
    }
}

export default Header
