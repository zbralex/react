import React, {Component} from 'react'

import Header from './Header'
import Footer from './Footer'
import articles from '../Fixtures'

import D1 from './days/D1'
import D2 from './days/D2'
import D3 from './days/D3'
import D3Hw from './days/D3Hw'
import D4 from './days/D4'
import D5 from './days/D5'

class Main extends Component {
    render() {
        return (
                <div className="container">
                <Header />
                    <section className="main">
                        <h1 className="h1">React practice</h1>
                        <h2 className="h2">In project used Bootstrap 4</h2>
                        <D1 />
                        <D2 />
                        <D3 />
                        <D3Hw />
                        <D4 name="Arthur" age="26" />
                        <D4 />
                        <D5 header="Day 5" text="default properties"/>
                        <D5 header={articles[1].title} text={articles[1].text} />
                        <D5 header={articles[3].title} text={articles[3].text} date={articles[3].date}/>
                    </section>
                    <Footer />
                </div>
        )
    }
}

export default Main