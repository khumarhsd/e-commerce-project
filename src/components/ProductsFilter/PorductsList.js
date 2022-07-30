import styled from 'styled-components'
import Product from '../Products/Product'
import { Container } from '../../styles/UI/Container'

const PorductsList = ({ data }) => {
  return (
    <Container>
      <ListWrapper>
        <Product data={data} />
      </ListWrapper>
    </Container>
  )
}

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 300px);
    justify-content: space-between;
  }
  img {
    max-height: 210px;
    max-width: 230px;
  }
`

export default PorductsList
