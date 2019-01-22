import React, {Component} from 'react'

class Footer extends Component {
    render() {
        const footerList = {
            item_1: 'Элемент 1',
            item_2: 'Элемент 2',
            item_3: 'Элемент 3',
            item_4: 'Элемент 4',
            item_5: 'Элемент 5'
    
        }
     return (
         <footer className="container">
             <ul className="nav container">
                 <li className="nav-item"><a className="nav-link" href="#">{footerList.item_1}</a></li>
                 <li className="nav-item"><a className="nav-link" href="#">{footerList.item_2}</a></li>
                 <li className="nav-item"><a className="nav-link" href="#">{footerList.item_3}</a></li>
                 <li className="nav-item"><a className="nav-link" href="#">{footerList.item_4}</a></li>
                 <li className="nav-item"><a className="nav-link" href="#">{footerList.item_5}</a></li>
             </ul>
         </footer>
     )
    }
}


export default Footer