import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled, { keyframes } from "styled-components"
import defaultDog from '../img/default_dog.png'

const ContentColumns = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 60;
  margin-right: 0;
  position: relative;
  @media only screen and (min-width: 1088px) {
    transform: skewX(12deg);
    overflow-x: scroll;
    overflow-y: hidden;
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

const Image = styled.div`
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  width: 100%;
  max-width: 300px;
  height: 70%;
  min-height: 200px;
`

class OurDogs extends React.Component {
  render() {
    const { posts } = this.props
    console.log(posts[0].node.frontmatter.image.childImageSharp.fluid.src);
    return (
      <ContentColumns className="columns is-12">
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
                    <div style={{fontWeight: 500}}>{post.frontmatter.homeName}</div>
                    <div style={{fontWeight: 100, fontSize: '.7em'}}>{post.frontmatter.officialName}</div>
                  </Subscription>
                </ImageSubscriptionContainer>
              </Link>
            </div>
          ))}
      </ContentColumns>
    )
  }
}

export default OurDogs;
//
// export default () => (
//   <StaticQuery
//     query={graphql`
//       query OurDogsQuery {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] }
//           filter: { frontmatter: { templateKey: { eq: "our-dogs" } } }
//         ) {
//           edges {
//             node {
//               id
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//                 templateKey
//                 officialName
//                 homeName
//                 date(formatString: "MMMM DD, YYYY")
//                 image {
//                   childImageSharp {
//                     fluid(maxWidth: 120, quality: 100) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data, count) => <OurDogs data={data} count={count} />}
//   />
// )

//
// <div className="column is-6">
//   <ImageSubscriptionContainer>
//     <Image style={{backgroundImage: `url(${pho2})`}}>
//     </Image>
//     <Subscription>
//       <div style={{fontWeight: 500}}>MARGARET</div>
//       <div style={{fontWeight: 100, fontSize: '.7em'}}>Queen Blanche z Marysina</div>
//     </Subscription>
//   </ImageSubscriptionContainer>
// </div>
