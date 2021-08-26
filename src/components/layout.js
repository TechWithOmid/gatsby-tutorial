import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    navLinkItem,
    navLinkText,
    navLinks,
    siteTitle
} from '../style/style.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
        `)
    return (
        <div>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>خانه</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>بلاگ</Link>
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
