import styled from 'styled-components'
import { Container } from '../../styles/UI/Container'
import { Link } from 'react-router-dom'
import chevron from '../../assets/chevron-right.svg'
import Product from '../Products/Product'
import {Loader} from '../../styles/UI/Spinner'


const ProductsRow = ({ data, title, loading, slug }) => {
  return (
      <ProductRowGrid>
        <CategoryTitle>{title}</CategoryTitle>
        <LinkStyled to={'/products/' + slug}>
          Hamısına bax <img src={chevron} alt='' />
        </LinkStyled>
        <ProductRowStyled>
          <Container>
            {loading ? (
        <Loader width={60} /> ):
        (<Product data={data}/>)
      }
          </Container>
        </ProductRowStyled>
      </ProductRowGrid>
  )
}

const ProductRowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3;
  margin: 1rem 0;
  @media (min-width: 1024px) {
    grid-template-rows: 2;
  }
`

const ProductRowStyled = styled.div`
  grid-column: 1/3;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 2rem 0;

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    height: 100%;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
    overflow: visible;
  }
`

const CategoryTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-medium);
  grid-column: 1/2;
  margin-bottom: 1rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    font-size: var(--fs-xl);
    padding: 0 3rem;
  }
`

const LinkStyled = styled(Link)`
  margin: 0 auto;
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  grid-row: 3/4;
  margin-bottom: 1rem;
  padding: 0 1rem;

  img {
    margin-left: 1rem;
  }

  @media (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1/2;
    padding: 0 3rem;
  }
`


export default ProductsRow
