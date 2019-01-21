import React from 'react'

function D1() {
    const aboutLearnedCode = ['.toUpperCase', '.toLowerCase'];
    const aboutLearned = 'in this lesson I added methods';
    const aboutLearnedHow ="It works whithout CSS. Only methods"
    const D1_listItems = {
        item_1: 'first element  in Lower Case, but showed in Upper Case',
        item_2: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM',
        item_3: '3',
        item_4: '4',
        item_5: '5',
        item_6: '6'
    }
    return (
        <div className="container bg-light">
            <h3 className="h3">Day 1</h3>
            <p className="h4">Component LIST</p>
            <p>{aboutLearned} <code>{aboutLearnedCode[0]}</code> and <code>{aboutLearnedCode[1]}</code></p>
            <p className="text-secondary">{aboutLearnedHow} <code>{aboutLearnedCode[0]}</code> and <code>{aboutLearnedCode[1]}</code></p>
            <ul className="list-group">
                <li className="list-group-item">{D1_listItems.item_1.toUpperCase()} - <code>D1_listItems.item_1.toUpperCase()</code></li>
                <li className="list-group-item">{D1_listItems.item_2.toLowerCase()} - <code>D1_listItems.item_2.toLowerCase()</code></li>
                <li className="list-group-item">{D1_listItems.item_3}</li>
                <li className="list-group-item">{D1_listItems.item_4}</li>
                <li className="list-group-item">{D1_listItems.item_5}</li>
                <li className="list-group-item">{D1_listItems.item_6}</li>
            </ul>
        </div>
    )
}

export default D1