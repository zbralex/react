import React from 'react'

function Header() {
    const headerItems = {
            item_1: 'el 1',
            item_2: 'el 2',
            item_3: 'el 3',
            item_4: 'el 4'
    }
    return (
        <header className="container">
            <ul className="nav">
                <li className="nav-item active"><a class="nav-link" href="#">{headerItems.item_1}</a></li>
                <li class="nav-item"><a class="nav-link" href="#">{headerItems.item_2}</a></li>
                <li class="nav-item"><a class="nav-link" href="#">{headerItems.item_3}</a></li>
                <li class="nav-item"><a class="nav-link" href="#">{headerItems.item_4}</a></li>
            </ul>

            
        </header>
    )
}
export default Header
