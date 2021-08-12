import * as React from 'react'
import Layout from '../components/layout.js'

const pageStyles = {
    color: "#232129",
    padding: "96px",
    direction: 'rtl',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const AboutPage = () => {
    return (
        <main style={pageStyles}>
            <Layout pageTitle="درباره من">
                <p>سلام!</p>
                <p>
                    من امید هستم. کار مورد علاقه‌ی من برنامه‌نویسی و انجام کارهای مربوط به تکنولوژیه. تقریباً ۳ سالی میشه که با برنامه نویسی آشنا شدم و بصورت تفریحی با زبان‌های مختلفی کار کردم و اولین زبانی که باهاش شروع کردم پایتون بود و بعد از پایتون سراغ سی شارپ و جاوا و… هم رفتم اما در نهایت تونستم با پایتون ارتباط خوبی برقرار کنم و زبان مورد علاقه‌م تا به الان بوده و جدیدا جاوااسکریپت هم به این لیستم اضافه شده.
                </p>
            </Layout>
        </main>
    )
}

export default AboutPage
