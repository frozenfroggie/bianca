import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import DogInfo from '../components/DogInfo'
import InfoWrapper from '../components/InfoWrapper'

import { Title } from '../components/style'

export const ExhibitionsPageTemplate = ({
  id,
  image,
  title,
  templateKey,
  date,
  exhibitionDate,
  dogs,
  achievements,
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
        id={id}
        image={image}
        title={title}
        templateKey={templateKey}
        date={date}
        dogs={dogs}
        exhibitionDate={exhibitionDate}
        achievements={achievements}
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

class ExhibitionsPage extends React.Component {
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
        <ExhibitionsPageTemplate
          id={frontmatter.id}
          image={frontmatter.image}
          title={frontmatter.title}
          templateKey={frontmatter.templateKey}
          date={frontmatter.date}
          exhibitionDate={frontmatter.exhibitionDate}
          dogs={frontmatter.dogs}
          achievements={frontmatter.achievements}
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

export default ExhibitionsPage

export const pageQuery = graphql`
query ExhibitionPageByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
          title
          templateKey
          date
          exhibitionDate
          dogs {
            dog
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
