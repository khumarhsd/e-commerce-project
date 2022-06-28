import { Splide, SplideSlide } from '@splidejs/react-splide'
import { partnersData } from '../../Data/partnersData'
import '@splidejs/react-splide/css'
import { Container } from '../../styles/Container'
import styled from 'styled-components'

const Partners = () => {
  return (
    <Wrapper>
      <Container>
        <Splide
          options={{
            perPage: 7,
            arrows: false,
            pagination: true,
            drag: 'free',
            gap: '10em',
            wheel: true,
            direction: 'loop',
            speed: 2000,

            breakpoints: {
              768: {
                pagination: false,
                direction: 'ttb',
                perPage: 3,
                gap: '5rem',
                height: '15em',
              },
            },
          }}
        >
          {partnersData.map((el) => (
            <SplideSlide key={Math.random()}>
              <Partner>{el.partner}</Partner>
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--gray-25);
  padding: 3.5rem 0;
  .splide--slide {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .splide__pagination--loop {
      margin-top: 1rem;
      top: 100%;

      .splide__pagination__page.is-active {
        background-color: var(--primary-100);
      }
    }
  }
`
const Partner = styled.div`
  img {
    background-color: #fff;
    padding: 0.75rem 3.5rem;
    border-radius: var(--radii);

    @media (min-width: 768px) {
      padding: 0.75rem 1.5rem;
    }
  }
`

export default Partners
