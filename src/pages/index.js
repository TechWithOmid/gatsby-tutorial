import * as React from 'react'

const pageStyles = {
    color: "#232129",
    padding: "96px",
    direction: 'rtl',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
    return (
        <main>
            <h1>TechWithOmid</h1>
            <div style={pageStyles}>
                <p>به وبلاگ من خوش آمدید در اینجا مطالب مرتبط با تکنولوژی و برنامه نویسی به اشتراک میزارم.</p>
            </div>
        </main>
    )
}

export default IndexPage
