import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'gatsby'
import {faTag, faFolder, faComment} from '@fortawesome/free-solid-svg-icons'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'
import Layout from '../components/Layout/Layout'
import PrevNext from '../components/PrevNext/PrevNext'
import Share from '../components/Share/Share'

export const PostWrapperDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 0 auto;
`

export const ImageDiv = styled.div`
    width: 100%;
    margin-top: 3rem;
    @media (max-width: 599px) {
        display: none;
    }
`

export const PostContent = styled.div`
    width: 100%;
    margin: 2rem auto;
`

export const PostTitle = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
    letter-spacing: 0.07em;
`

export const PostDateP = styled.p`
    text-align: center;
    color: rgba (25, 13, 8);
    letter-spacing: 0.07em;
`

export const DangerousDiv = styled.div`
    & p {
        letter-spacing: 0.07em;
        line-height: 1.7;
    }
    & li {
        margin-left: -0.5rem;
        list-style-type: circle;
    }
    & a {
        letter-spacing: 0.07em;
    }
`

export const TaggedInSpan = styled.span`
    letter-spacing: 0.07em;
    color: rgb(47, 0, 0);
    font-weight: bold;
`

export const CategorizedInSpan = styled.span`
    letter-spacing: 0.07em;
    color: rgba(92, 44, 29);
    font-weight: bold;
`

export const PostCategoriesDiv = styled.div`
    margin-top: 1.5rem;
`

export const DiscussTwitter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem auto;
`

const BlogPost = props => {
    const url = props.data.site.siteMetadata.siteUrl
    const thumbnail =
        props.data.markdownRemark.frontmatter.image &&
        props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
    const {
        title,
        date,
        image,
        tags,
        categories,
        description,
        author,
    } = props.data.markdownRemark.frontmatter
    const {prev, next} = props.pageContext
    const blogPostUrl = `${url}${props.location.pathname}`

    return (
        <Layout>
            <Helmet>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="thumbnail" content={thumbnail} />
                <meta name="date" content={date} />
                <meta name="description" content={description} />
                <meta name="tags" content={tags} />
                <meta name="categories" content={categories} />
            </Helmet>
            <PostWrapperDiv>
                <ImageDiv>
                    {image && <Img fluid={image.childImageSharp.fluid} />}
                </ImageDiv>
                <PostContent>
                    <PostTitle>{title}</PostTitle>
                    <PostDateP>{date}</PostDateP>
                    <DangerousDiv
                        dangerouslySetInnerHTML={{
                            __html: props.data.markdownRemark.html,
                        }}
                    />
                    <div>
                        <TaggedInSpan>Tagged in:</TaggedInSpan>
                        {tags.map((tag, i) => (
                            <Link
                                to={`/tags/${tag}`}
                                key={i}
                                title={`visit link to "${tag}" tag page listing the posts tagged in "${tag}"`}
                            >
                                <FontAwesomeIcon
                                    icon={faTag}
                                    style={{
                                        color: 'rgb(25,13,8)',
                                        marginRight: '0.5rem',
                                        marginLeft: '0.5rem',
                                    }}
                                />
                                {tag}
                            </Link>
                        ))}
                    </div>
                    <PostCategoriesDiv>
                        <CategorizedInSpan>
                            Categorized under:
                        </CategorizedInSpan>
                        {categories.map((category, i) => (
                            <Link
                                to={`/categories/${category}`}
                                key={i}
                                title={`visit link to "${category}" category page listing the posts categorized under "${category}"`}
                            >
                                <FontAwesomeIcon
                                    icon={faFolder}
                                    style={{
                                        color: 'rgb(25,13,8)',
                                        marginRight: '0.5rem',
                                        marginLeft: '0.5rem',
                                    }}
                                />
                                {category}
                            </Link>
                        ))}
                    </PostCategoriesDiv>
                    <DiscussTwitter>
                        <a
                            target="_new"
                            rel="noopener noreferrer"
                            /* using mobile.twitter.com because if people haven't upgraded to the new experience, the regular URL wont work for them */
                            href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                                blogPostUrl,
                            )}`}
                            title={`visit link to this shared post on Twitter to discuss it there`}
                        >
                            <FontAwesomeIcon
                                icon={faComment}
                                style={{
                                    color: 'rgb(25,13,8)',
                                    marginRight: '0.5rem',
                                }}
                            />
                            <span>Discuss On Twitter</span>
                        </a>
                    </DiscussTwitter>
                    <div className="post-social-share">
                        <Share
                            title={title}
                            url={url}
                            pathname={props.location.pathname}
                        />
                    </div>
                    <div className="prev-next-div">
                        <PrevNext
                            prev={prev && prev.node}
                            next={next && next.node}
                        />
                    </div>
                </PostContent>
            </PostWrapperDiv>
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            excerpt
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
                tags
                categories
                description
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
