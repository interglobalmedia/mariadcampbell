import React from 'react'
import Layout from '../components/Layout/Layout'
import Img from 'gatsby-image'
import Metatags from '../components/Metatags/Metatags'
import { graphql } from 'gatsby'
import PrevNext from '../components/PrevNext/PrevNext'
import Share from '../components/Share/Share'
import Bio from '../components/Bio/Bio'
import '../components/Layout/Layout.css'
import styled from '@emotion/styled'

const ImageDiv = styled.div`
  width: 100%;
  @media(max-width: 599px) {
    display: none;
  }
`

const PostContent = styled.div`
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
`

const PostTitle = styled.h1`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

function BlogPost(props) {
  const url = props.data.site.siteMetadata.siteUrl
  const thumbnail = props.data.markdownRemark.frontmatter.image && props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
  const { title, image, tags } = props.data.markdownRemark.frontmatter
  const { prev, next } = props.pageContext
  return (
    <Layout>
      <Metatags
        title={title}
        description={props.data.markdownRemark.excerpt}
        thumbnail={thumbnail && url + thumbnail}
        url={url}
        pathname={props.location.pathname}
      />

      <ImageDiv>
        {image && <Img fluid={image.childImageSharp.fluid} />}
      </ImageDiv>
      <PostContent>
        <PostTitle>{title}</PostTitle>
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        <div className="tags-list">
          <span>Tagged in: </span>
          {tags.map((tag, i) => (
            <a href={`/tags/${tag}`} key={i} style={{ marginLeft: "10px" }}>{tag}</a>
          ))}
        </div>
        <div className="social-list">
          <Share title={title} url={url} pathname={props.location.pathname} />
        </div>
        <Bio />
        <div className="prev-next-div">
          <PrevNext prev={prev && prev.node} next={next && next.node} />
        </div>
      </PostContent>
    </Layout >
  )
}

export default BlogPost

export const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       frontmatter {
        title
        tags
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
       }
       }
   }
   
  site {
    siteMetadata {
        siteUrl
      }
   }
}
`