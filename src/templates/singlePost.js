import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"
import { Container, Post, FeatureImage } from "../components"




















export const pageQuery = graphql`
query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
    body
    frontmatter {date excerpt slug title
        featureImage {
            publicURL
            childImageSharp {
                fixed {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }
}
`
