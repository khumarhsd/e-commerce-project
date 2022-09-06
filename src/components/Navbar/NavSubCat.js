import styled from 'styled-components'
import { Container } from '../../styles/UI/Container'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

const NavSubCat = (props) => {
  const closeSubcategory = function () {
    props.setOpen(false)
  }

  return (
    <>
      {props.open && (
        <StyledSubCat
        onMouseLeave={closeSubcategory}
        className={props.open ? 'subCat-active' : ''}
        >
          <span>
        <BsArrowLeft onClick={() => closeSubcategory()} />
          </span>
          <Container>
            {props.items.subCat &&
              props.items.subCat.map((el) => (
                <li key={el.id}>
                  <Link to={'/products/' + el.slug}>{el.name}</Link>
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
  height: 100vh;
  transition: 0.3s all;
  .subCat-active {
    transform: translateX(0);
  }
  span{
    svg{
      position: absolute;
      right: 10%;
    }
  }
  li {
    display: flex;
    flex-direction: column;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    height: 10vh;
    margin-top: 1.75rem;
    box-shadow: 0px 300px 400px 0 rgba(0, 0, 0, 0.37);
    span{
      display: none;
    }
    & > div {
      margin-top: 1.5rem;
      flex-direction: row;
      gap: 5rem;
    }

    a {
      font-weight: var(--fw-medium);
      font-size: var(--fs-l);
    }
  }
`

export default NavSubCat
