import styled from 'styled-components'
import { FiX } from 'react-icons/fi'
import { Container } from '../../styles/UI/Container'
import { useSelector, useDispatch } from 'react-redux'
import { fetchByCategory } from '../../redux/actions/products'
import { useEffect, useMemo } from 'react'
import Dropdown from './Dropdown'
import { Overlay } from '../../styles/UI/Overlay'

const NavSubCat = (props) => {
  const closeSubcategory = function () {
    props.setOpen(false)
  }
  const products = useSelector((state) => state.products.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchByCategory(''))
  }, [dispatch])

  return (
    <>
      {props.open && (
        <StyledSubCat
          onMouseLeave={closeSubcategory}
          className={props.open ? 'subCat-active' : ''}
        >
          <Container>
            {props.items.subCat &&
              props.items.subCat.map((el) => (
                <li key={el.id}>
                  <a href='#'>{el.name}</a>
                  <Dropdown category={props.items.subCat} products={products} />
                </li>
              ))}
          </Container>
        </StyledSubCat>
      )}
    </>
  )
}

const StyledSubCat = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 11;
  font-size: var(--fs-xl);
  height: 100vh;
  transition: 0.3s all;
  .subCat-active {
    transform: translateX(0);
  }

  li {
    display: flex;
    flex-direction: column;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    height: 300px;
    margin-top: 2rem;
    box-shadow: 0px 300px 400px 0 rgba(0, 0, 0, 0.37);

    & > div {
      margin-top: 2rem;
      flex-direction: row;
      gap: 10rem;
    }

    a {
      font-weight: var(--fw-medium);
      font-size: var(--fs-l);
    }
  }
`

export default NavSubCat
