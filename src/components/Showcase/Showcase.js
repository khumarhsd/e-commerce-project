import { Container } from '../../styles/Container'
import styled from 'styled-components'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import ShowcaseSlide from './ShowcaseSlide'
const Showcase = () => {
  return (
    <div>
      <Container>
        <Overlay>
          <Splide
            options={{
              arrows: false,
              perPage: 1,
              pagination: true,
              drag: true,
              autoplay: true,
              interval: 3000,
              rewind: true,
              speed: 2000,

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
      </Container>
    </div>
  )
}

const Overlay = styled.div`
padding-bottom: 3rem;
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

  margin-bottom: 2rem;
  .splide__pagination {
    top: 100%;

    .splide__pagination__page.is-active {
      background-color: var(--primary-100);
    }
  }

  @media (min-width: 768px) {
    background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 4%,
    rgba(85, 255, 57, 0.2) 13%,
    rgba(13, 255, 110, 0.2) 27%,
    rgba(6, 165, 255, 0.2) 45%,
    rgba(255, 199, 0, 0.2) 75%,
    rgba(255, 0, 199, 0.11) 88%,
    rgba(255, 255, 255, 0.1) 98%
  );
    }
`

export default Showcase
