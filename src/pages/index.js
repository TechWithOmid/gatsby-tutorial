import * as React from 'react'
import Layout from '../components/layout.js'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
    return (
        <main>
            <Layout pageTitle="خانه">
                <StaticImage
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                />
                <p> به وبلاگ من خوش آمدید در اینجا مطالب مرتبط با تکنولوژی و برنامه نویسی به اشتراک میزارم.</p>
                <p>به زودی مطالب جالبی رو به اشتراک میزارم فعلا مشغول توسعه‌ی وبسایت هستم پس گوش به زنگ باشید :)</p>
            </Layout>
        </main>
    )
}

export default IndexPage
