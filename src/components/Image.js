/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */
import React from 'react'
import Img from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: {eq: "profileSmall.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            sizes
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
    />
)
export default Image
