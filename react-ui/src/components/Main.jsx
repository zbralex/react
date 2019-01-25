import React, {Component} from 'react'

import Header from './Header'
import Footer from './Footer'

import D1 from './days/D1'
import D2 from './days/D2'
import D3 from './days/D3'
import D3Hw from './days/D3Hw'
import D4 from './days/D4'

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
                    </section>
                    <Footer />
                </div>
        )
    }
}

export default Main