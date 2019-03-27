// import React from 'react'
// import { Link, graphql } from 'gatsby'
// import './post.css'
// import './index.css'
// import Layout from '../components/Layout/Layout'

// const IndexPage = (props) => {
//     const postList = props.data.allMarkdownRemark
//     return (
//         <Layout>
//             {postList.edges.map(({ node }, i) => (
//                 <Link to={node.fields.slug} className="link" key={i}>
//                     <div className="post-list" key={i}>
//                         <div className="post-list-date">on {node.frontmatter.date}</div>
//                         <h1 className="post-list-title">{node.frontmatter.title}</h1>
//                         <p className="post-list-excerpt">{node.excerpt}</p>
//                         <ul className="post-list-author">
//                             <li>
//                                 by {node.frontmatter.author}
//                             </li>
//                         </ul>
//                     </div>
//                 </Link>
//             ))}
//         </Layout>
//     )
// }
// export default IndexPage;
// export const indexQuery = graphql`
//   query indexQuery {    
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } {
//       edges {
//         node {
//           fields{
//             slug
//           }
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date(formatString: "MMMM Do YYYY")
//             title
//             author
//           }
//         }
//       }
//     }
//   }
// `

import React from 'react'
import Layout from '../components/Layout/Layout'

const IndexPage = () => {
    return (
        <Layout>
            This is my home page!
        </Layout>
    )
}

export default IndexPage