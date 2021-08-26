import * as React from 'react'
import Layout from '../components/layout.js'
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
    return (
        <Layout pageTitle="بلاگ">
            <h3>و بلاخره اینم از وبلاگ ما</h3>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
      allFile {
        nodes {
          name
        } 
      }
    }
`

export default BlogPost
