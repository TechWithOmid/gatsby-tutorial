import * as React from 'react'
import { Link } from 'gatsby'
import { container } from '../style/style.module.css'


const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">خانه</Link></li>
                    <li><Link to="/about">درباره من</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
