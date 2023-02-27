import styled from 'styled-components'
import Product from '../Products/Product'
import { Container } from '../../styles/UI/Container'
import SelectMenu from './SelectMenu'

const PorductsList = ({ currentPage,data, setdata }) => {
  const localData = JSON.parse(localStorage.getItem('products'))
  const offset = currentPage * 6
  const currentPageData = data.length === 0 ? localData.slice(offset, offset + 6) :data.slice(offset, offset + 6)
  return (
      <Container>
        <ListHeader>
          <p className='count'>{data.length === 0 ? localData.length : data.length} məhsul tapıldı</p>
          <SelectMenu data={currentPageData} setdata={setdata} />
        </ListHeader>
        <ListWrapper>
          <Product
            data={currentPageData}
          />
        </ListWrapper>
        
      </Container>
  )
}

  

const ListHeader = styled.div`
margin-top: 1rem;
.count {
    font-weight: var(--fw-medium);
    font-size: var(--fs-sm);
  }
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(min-width: 768px) {
    margin-top: -.75rem;
  }
`
const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
  }
  img {
    max-height: 210px;
    min-height: 100%;
    max-width: 230px;
  }
`

export default PorductsList
