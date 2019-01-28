import React, {Component} from 'react'

import Header from './Header'
import Footer from './Footer'
import articles from '../Fixtures'
import ArticleList from './days/ArticleList'

import D1 from './days/D1'
import D2 from './days/D2'
import D3 from './days/D3'
import D3Hw from './days/D3Hw'
import D4 from './days/D4'
import D5 from './days/D5'
import D6 from './days/D6'

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
                        <D5 header="Day 5" text={articles[1].text} />
                        <D6 title={articles[5].title}  text={articles[5].text}/>
                        <ArticleList articles= {articles} />
                    </section>
                    <Footer />
                </div>
        )
    }
}

export default Main