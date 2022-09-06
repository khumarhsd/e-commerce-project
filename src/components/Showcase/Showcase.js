import styled from 'styled-components'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import ShowcaseSlide from './ShowcaseSlide'
import overlay from '../../assets/overlay.png'

const Showcase = () => {
  return (
    <Overlay>
      <Splide
        options={{
          arrows: false,
          perPage: 1,
          pagination: true,
          drag: true,
          autoplay: true,
          interval: 5000,
          rewind: true,
          speed: 4500,

          breakpoints: {
            768: {
              pagination: false,
              drag: false,
              autoplay: false,
            },
          },
        }}
      >
        <ShowcaseSlide />
      </Splide>
    </Overlay>
  )
}

const Overlay = styled.div`
position: relative;
z-index: -100;
  padding: 3rem 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 4%,
    rgba(85, 255, 57, 0.1) 13%,
    rgba(13, 255, 110, 0.1) 27%,
    rgba(6, 165, 255, 0.05) 45%,
    rgba(255, 199, 0, 0.1) 75%,
    rgba(255, 0, 199, 0.05) 88%,
    rgba(255, 255, 255, 0.1) 98%
  );
  box-shadow: inset 0px 0px 40px 40px #fff;

  .splide__pagination {
    top: 100%;

    li {
      padding: 0 0.25rem;
    }

    .splide__pagination__page.is-active {
      background-color: var(--primary-100);
    }
  }

  @media (min-width: 768px) {
    margin-top: 1rem;
    height: 700px;
    padding: 0;
    /* border-top: 2px solid var(--primary-100); */
    background: url(${overlay}) center;
  }
`

export default Showcase
