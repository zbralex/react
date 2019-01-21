import React from 'react'
import D1 from './days/D1'
import Header from './Header'
import Footer from './Footer'

function Main() {
    return (
        <main className="container">
        <Header />
            <body>
                
                <section className="main">
                    <h1 className="h1">React practice</h1>
                    <h2 className="h2">In project used Bootstrap 4</h2>
                    <D1 />
                </section>
                <Footer />
            </body>
        </main>
    )
}
export default Main