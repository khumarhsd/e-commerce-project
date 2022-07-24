import { SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import styled from 'styled-components'
import scimg from '../../assets/scimg.svg'
import scimg2 from '../../assets/scimg2.png'
import scimg3 from '../../assets/scimg3.png'

const ShowcaseSlide = () => {
  return (
    <>
      <SplideSlide>
        <SlideContent>
          <SlideImage>
            <img src={scimg} alt='' />
          </SlideImage>
          <SlideText>
            <h2>Buy & Sell</h2>
            <h2>What's Now & Next</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              malesuada et leo faucibus{' '}
            </p>
          </SlideText>
        </SlideContent>
      </SplideSlide>
      <SplideSlide>
        <SlideContent>
          <SlideImage>
            <img src={scimg2} alt='' />
          </SlideImage>
          <SlideText>
            <h2>Buy & Sell</h2>
            <h2>What's Now & Next</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              malesuada et leo faucibus{' '}
            </p>
          </SlideText>
        </SlideContent>
      </SplideSlide>
      <SplideSlide>
        <SlideContent>
          <SlideImage>
            <img src={scimg3} alt='' />
          </SlideImage>
          <SlideText>
            <h2>Buy & Sell</h2>
            <h2>What's Now & Next</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              malesuada et leo faucibus{' '}
            </p>
          </SlideText>
        </SlideContent>
      </SplideSlide>
    </>
  )
}

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 1rem 0;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: left;
  }
`
const SlideImage = styled.div`
  img {
    width: 250px;
  }

  @media (min-width: 768px) {
    img {
      width: 470px;
      padding: 0 1rem;
    }
  }
`
const SlideText = styled.div`
  h2 {
    font-size: var(--fs-d-xs);
    font-weight: var(--fw-bold);
  }

  p {
    margin-top: 0.75rem;
    max-width: 300px;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: var(--fs-d-lg);
      font-weight: var(--fw-bold);
      padding: 0 3rem;
    }
    p {
      margin-top: 0.75rem;
      max-width: 450px;
      padding: 0 3rem;
    }
  }
`

export default ShowcaseSlide
