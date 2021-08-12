import * as React from 'react'
import { Link } from 'gatsby'
import { container, navLinkItem, navLinkText, navLinks } from '../style/style.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>خانه</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>درباره من</Link>
                    </li>
                </ul>
            </nav>
            <main className={container}>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
