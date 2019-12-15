import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled, { keyframes } from "styled-components"
import defaultDog from '../img/default_dog.png'
import { Image } from './style'

const ContentColumns = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 60;
  margin-right: 0;
  position: relative;
  @media only screen and (min-width: 1088px) {
    transform: skewX(12deg);
    /* overflow-x: scroll;
    overflow-y: hidden; */
    padding-left: 50px;
  }
`

const ImageSubscriptionContainer = styled.div`
  padding: 0px 15px;
  margin: 0px 15px;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Subscription = styled.div`
  font-size: 2em;
  text-align: center;
  line-height: 1em;
  margin-top: 15px;
  color: #018ba7;
`

class Gallery extends React.Component {
  render() {
    const { posts } = this.props
    return (
      <ContentColumns className="columns is-12 is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-6" key={post.id}>
              <Link to={post.fields.slug}>
                <ImageSubscriptionContainer>
                  <Image style={{backgroundImage: `
                    url(${
                      !!(post.frontmatter.image && post.frontmatter.image.childImageSharp)
                        ? post.frontmatter.image.childImageSharp.fluid.src
                        : defaultDog
                      })
                    `}}>
                  </Image>
                  <Subscription>
                    <div style={{fontWeight: 500}}>{post.frontmatter.title}</div>
                  </Subscription>
                </ImageSubscriptionContainer>
              </Link>
            </div>
          ))}
      </ContentColumns>
    )
  }
}

export default Gallery;
