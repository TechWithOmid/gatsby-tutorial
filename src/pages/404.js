import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    direction: 'rtl',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}

// markup
const NotFoundPage = () => {
    return (
        <main style={pageStyles}>
            <title>Not found</title>
            <h1 style={headingStyles}>پیدا نشد</h1>
            <p style={paragraphStyles}>
                شرمنده{" "}
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>{" "}
                داداچ داری اچتب میزنی این صفحه رو نداریم!
                <br />
                <Link to="/">صفحه اصلی</Link>.
            </p>
        </main>
    )
}

export default NotFoundPage
