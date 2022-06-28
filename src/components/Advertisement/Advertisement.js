import { Container } from '../../styles/Container'
import adv1 from '../../assets/adv1.svg'
import adv2 from '../../assets/adv2.svg'
import styled from 'styled-components'


const Advertisement = () => {
  return (
    <Container>
      <Wrapper>
      <img src={adv1} alt="" />
      <img src={adv2} alt="" />
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  

  @media(min-width: 768px) {
    flex-direction: row;

    img{
      width: 600px;
      cursor: pointer;
    }
  }
`

export default Advertisement