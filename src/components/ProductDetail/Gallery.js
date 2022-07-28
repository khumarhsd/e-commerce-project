import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import styled from 'styled-components'
import { Loader } from '../../styles/UI/Spinner'

const Gallery = ({ assets }) => {
  const images = assets?.map((asset) => ({
    original: asset?.url,
    thumbnail: asset?.url,
  }))
  
  const settings = {
    showFullscreenButton: false,
    showPlayButton: false,
    showThumbnails: true,
  }
  return (
    <Wrapper>
      {!images ? (
        <Loader width={50} />
      ) : (
        <ImageGallery
          items={images}
          showFullscreenButton={settings.showFullscreenButton}
          showPlayButton={settings.showPlayButton}
          showThumbnails={settings.showThumbnails}
          alt=''
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  button,
  button:focus,
  button:hover,
  button.active,
  .active {
    filter: none;
    border: none;
    cursor: pointer;
  }

  .image-gallery-icon:focus {
    outline: none;
  }


  button:hover.image-gallery-thumbnail {
    transition: all 0.2s;
    transform: scale(1.05);
  }

  .image-gallery {
    width: 100%;
    margin-bottom: 2rem;
  }

  .image-gallery-slides {
    margin: auto 0;
  }
  .image-gallery-content .image-gallery-slide {
    height: 225px;
  }
  .image-gallery-content .image-gallery-slide img {
    height: 100%;
    padding: 0 1rem;
  }
  .image-gallery-svg {
    color: black;
    height: 3rem;
    width: 3rem;
  }

  .image-gallery-icon {
    outline: none;
  }

  .image-gallery-thumbnails {
    padding: 0 1rem;
  }
  .image-gallery-thumbnail {
    margin-top: 1rem;
  }

  .image-gallery-thumbnail img {
    width: 5rem;
    height: 6rem;
  }

  @media (min-width: 1024px) {
    .image-gallery {
      width: 600px;
      padding: 1rem 3rem;
    }

    .image-gallery-content .image-gallery-slide {
      height: 400px;
    }


  }
`

export default Gallery
