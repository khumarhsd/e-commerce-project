import { Container } from '../../styles/UI/Container'
import adv1 from '../../assets/adv1.svg'
import adv2 from '../../assets/adv2.svg'
import styled from 'styled-components'

const Advertisement = () => {
  return (
    <Container>
      <Wrapper>
        <img src={adv1} alt='' />
        <img src={adv2} alt='' />
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  img {
    width: 100%;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default Advertisement
