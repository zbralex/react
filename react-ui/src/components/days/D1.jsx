import React from 'react'

function D1() {
    const D1_listItems = {
        item_1: '1',
        item_2: '2',
        item_3: '3',
        item_4: '4',
        item_5: '5',
        item_6: '6'
    }
    return (
        <div className="container bg-light">
            <h3 className="h3">Day 1</h3>
            <p className="h4">Component LIST</p>
            <ul className="list-group">
                <li className="list-group-item">{D1_listItems.item_1}</li>
                <li className="list-group-item">{D1_listItems.item_2}</li>
                <li className="list-group-item">{D1_listItems.item_3}</li>
                <li className="list-group-item">{D1_listItems.item_4}</li>
                <li className="list-group-item">{D1_listItems.item_5}</li>
                <li className="list-group-item">{D1_listItems.item_6}</li>
            </ul>
        </div>
    )
}

export default D1