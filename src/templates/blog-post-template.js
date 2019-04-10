import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { faTag, faFolder } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Layout from '../components/Layout/Layout'
import Metatags from '../components/Metatags/Metatags'

import PrevNext from '../components/PrevNext/PrevNext'
import Share from '../components/Share/Share'
import '../components/Layout/Layout.css'

const PostWrapperDiv = styled.div`
  width: 90%; 
  max-width: 960px; 
  margin: 0 auto;
`

const ImageDiv = styled.div`
  width: 100%;
  margin-top: 1.0rem;
  @media(max-width: 599px) {
    display: none;
  }
`

const PostContent = styled.div`
  width: 100%;
  // max-width: 960px;
  margin: 2rem auto;
`

const PostTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.07em;
`

const PostDateP = styled.p`
  text-align: center;
  color: rgba(132,0,88, 1);
  letter-spacing: 0.07em;
`

const DangerousDiv = styled.div`
& p {
  letter-spacing: 0.07em;
  line-height: 1.7;
}
& li {
  margin-left: -0.5rem;
  list-style-type: circle;
}
  & a {
    color: #cb4b16;
    box-shadow: none;
    letter-spacing: 0.07em;
    & :hover {
      text-decoration: underline;
    }
  }
`

const TaggedInSpan = styled.span`
  letter-spacing: 0.07em;
  color: rgba(132,0,88,1);
`
const PostTagsDiv = styled.div`
  & a {
  box-shadow: none; 
  color: #cb4b16;
  letter-spacing: 0.07em;
  & :hover {
    text-decoration: underline;
  }
`
const CategorizedInSpan = styled.span`
  letter-spacing: 0.07em;
  color: rgba(132,0,88,1);
`

const PostCategoriesDiv = styled.div`
margin-top: 1.5rem;
  & a {
  box-shadow: none; 
  color: #cb4b16;
  letter-spacing: 0.07em;
  & :hover {
    text-decoration: underline;
  }
`

function BlogPost(props) {
  const url = props.data.site.siteMetadata.siteUrl
  const thumbnail = props.data.markdownRemark.frontmatter.image && props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
  const { title, date, image, tags, categories } = props.data.markdownRemark.frontmatter
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
      <PostWrapperDiv>
        <ImageDiv>
          {image && <Img fluid={image.childImageSharp.fluid} />}
        </ImageDiv>
        <PostContent>
          <PostTitle>{title}</PostTitle>
          <PostDateP>{date}</PostDateP>
          <DangerousDiv dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></DangerousDiv>
          <PostTagsDiv>
            <TaggedInSpan>Tagged in: </TaggedInSpan>
            {tags.map((tag, i) => (
              <Link to={`/tags/${tag}`} key={i}><FontAwesomeIcon icon={faTag} style={{ color: '#268bd2' }} /> {tag} </Link>
            ))}
          </PostTagsDiv>
          <PostCategoriesDiv>
            <CategorizedInSpan>Categorized under: </CategorizedInSpan>
            {categories.map((category, i) => (
              <Link to={`/categories/${category}`} key={i}><FontAwesomeIcon icon={faFolder} style={{ color: '#268bd2', marginRight: '0.25rem', marginLeft: '0.5rem' }} />
                {category}
              </Link>
            ))}
          </PostCategoriesDiv>
          <div className="post-social-share">
            <Share title={title} url={url} pathname={props.location.pathname} />
          </div>
          <div className="prev-next-div">
            <PrevNext prev={prev && prev.node} next={next && next.node} />
          </div>
        </PostContent>
      </PostWrapperDiv>
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
        date(formatString: "MMMM Do, YYYY")
        tags
        categories
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