import styled from 'styled-components'
import { Container } from '../../styles/UI/Container'
import { Link } from 'react-router-dom'
import rightArrow from '../../assets/rightArrow.svg'

const Breadcrumbs = ({ category,product }) => {
  return (
    <Wrapper>
      <Container>
        <Link to='/' className='home'>
          Ana səhifə
        </Link>
        <img src={rightArrow} alt='rightArrow' />
        {category &&
        <Link to={'/products/' + category} className='home'>
        {category}
        <img src={rightArrow} alt='rightArrow' />
      </Link>
      
        }
        {product &&
        <Link to={'/product/' + product.id} className='home'>
        {product.name}
      </Link>
        }
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin: 3rem 0;
    font-size: var(--fs-sm);
    text-transform: capitalize;
    .home {
      color: var(--gray-50);
    }
    img {
      margin: 0 0.5rem;
    }
  }
`

export default Breadcrumbs
