import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from "styled-components"

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Background from '../components/Background'

export const IndexPageTemplate = ({
  dogs,
  litters,
  exhibitions
}) => (
  <div>
    <Background
      dogs={dogs}
      litters={litters}
      exhibitions={exhibitions}
      >
    </Background>
  </div>
)

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const dogs = posts.filter(post => post.node.frontmatter.templateKey === 'our-dogs')
  const litters = posts.filter(post => post.node.frontmatter.templateKey === 'our-litters')
  const exhibitions = posts.filter(post => post.node.frontmatter.templateKey === 'exhibitions')
  return (
    <Layout>
      <IndexPageTemplate
        dogs={dogs}
        litters={litters}
        exhibitions={exhibitions}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { in: ["our-dogs", "our-litters", "exhibitions"] } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            officialName
            homeName
            title
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
