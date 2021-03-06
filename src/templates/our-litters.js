import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import DogInfo from '../components/DogInfo'
import InfoWrapper from '../components/InfoWrapper'

import { Title } from '../components/style'

export const LittersPageTemplate = ({
  id,
  image,
  title,
  date,
  puppies,
  galleryImages,
  birthDate,
  parents,
  openLightbox,
  closeLightbox,
  lightbox,
  currentImage,
  photos,
  description
}) => {
  return (
    <InfoWrapper>
      <Title> { title } </Title>
      <DogInfo
        id={id}
        image={image}
        parents={parents}
        puppies={puppies}
        title={title}
        galleryImages={galleryImages}
        birthDate={birthDate}
        lightbox={lightbox}
        onClose={closeLightbox}
        openLightbox={(idx, e) => openLightbox(idx, e)}
        currentImage={currentImage}
        photos={photos}
        description={description}
        />
    </InfoWrapper>
  )
}

class LittersPage extends React.Component {
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
        <LittersPageTemplate
          id={frontmatter.id}
          puppies={frontmatter.puppies}
          parents={frontmatter.parents}
          image={frontmatter.image}
          title={frontmatter.title}
          birthDate={frontmatter.birthDate}
          galleryImages={frontmatter.galleryImages}
          description={frontmatter.description}
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

export default LittersPage

export const pageQuery = graphql`
query LittersPageByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        templateKey
        date
        birthDate
        description
        parents {
          father
          mother
        }
        puppies {
          name
          gender
        }
        galleryImages {
          image {
            childImageSharp {
              fluid(maxWidth: 2400, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2400, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
