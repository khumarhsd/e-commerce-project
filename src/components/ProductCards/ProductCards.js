import { Container } from '../../styles/UI/Container'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import xiaomi from '../../assets/xiaomi.svg'
import watch from '../../assets/watch.svg'
import phones from '../../assets/phones.svg'

const ProductCards = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ProductCard
            title={'Telefon'}
            amount={'Məhsul sayı: 322'}
            link={'Məhsullara keçid'}
            image={xiaomi}
          />
          <ProductCard
            title={'Smart Saat'}
            amount={'Məhsul sayı: 46'}
            link={'Məhsullara keçid'}
            image={watch}
          />
          <ProductCard
            title={'Aksesuar'}
            amount={'Məhsul sayı: 891'}
            link={'Məhsullara keçid'}
            image={phones}
          />
        </Wrapper>
      </Container>
    </div>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;

  & > div:nth-child(1) {
    grid-column: 1;
    grid-row: span 2;
    height: 400px;
    flex-direction: column;
    img {
      width: 300px;
    }
  }
  & > div:nth-child(2) {
    height: 250px;

    img {
      width: 150px;
      margin-right: 0.5rem;
    }
  }
  & > div:nth-child(3) {
    height: 250px;
    img {
      width: 160px;
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    & > div:nth-child(1) {
      height: 100%;
      img {
        width: 470px;
      }
    }

    & > div:nth-child(2) {
      grid-column: 2/3;
              height: 350px;

      img {
        width: 250px;
      }
    }
    & > div:nth-child(3) {
      grid-column: 2/3;
      height: 350px;

      img {
        width: 300px;
      }
    }
  }
  @media (max-width: 370px) {

    & > div:nth-child(1) {
      img {
        width: 50px;
      }
    }

    & > div:nth-child(2) {
      img {
        width: 50px;

        margin: 0;
      }
    }
    & > div:nth-child(3) {
      img {
        width: 50px;
        margin: 0;

      }
    }
  }
`

export default ProductCards
