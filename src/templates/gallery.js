import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import DogInfo from '../components/DogInfo'
import InfoWrapper from '../components/InfoWrapper'

import { Title } from '../components/style'

export const GalleryPageTemplate = ({
  id,
  title,
  galleryImages,
  openLightbox,
  closeLightbox,
  lightbox,
  currentImage,
  photos
}) => {
  return (
    <InfoWrapper>
      <Title> { title } </Title>
      <DogInfo
        title={title}
        galleryImages={galleryImages}
        lightbox={lightbox}
        onClose={closeLightbox}
        openLightbox={(idx, e) => openLightbox(idx, e)}
        currentImage={currentImage}
        photos={photos}
        />
    </InfoWrapper>
  )
}

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightbox: false,
      currentImage: 0,
      photos: []
    }
  }
  openLightbox = (galleryImages, idx, event) => {
    event.preventDefault();
    const photos = galleryImages.map(({image, description}) => ({image: image.childImageSharp.fluid, description}))
    this.setState({ lightbox: true, photos, currentImage: idx });
  }
  closeLightbox = () =>{
    this.setState({ lightbox: false });
  }
  render() {
    const { frontmatter } = this.props.data.markdownRemark
    return (
      <Layout>
        <GalleryPageTemplate
          id={frontmatter.id}
          title={frontmatter.title}
          galleryImages={frontmatter.galleryImages}
          openLightbox={(idx, e) => this.openLightbox(frontmatter.galleryImages, idx, e)}
          closeLightbox={this.closeLightbox}
          lightbox={this.state.lightbox}
          currentImage={this.state.currentImage}
          photos={this.state.photos}
        />
      </Layout>
    )
  }
}

export default GalleryPage

export const pageQuery = graphql`
query GalleryPageByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        galleryImages {
          image {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
