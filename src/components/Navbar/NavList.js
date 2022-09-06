import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchCat } from '../../redux/actions/categories'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavSubCat from './NavSubCat'
import chevron from '../../assets/chevron-right.svg'
import { Container } from '../../styles/UI/Container'
import { Overlay } from '../../styles/UI/Overlay'

const NavList = ({ navOpen }) => {
  const [open, setOpen] = useState(false)
  const [subcategories, setSubcategories] = useState({
    name: '',
    subCat: [],
  })

  // burger menu
  const body = document.querySelector('body')
  const ul = document.querySelector('ul')

  if (navOpen) {
    body.classList.add('active')
  } else {
    body.classList.remove('active')
  }

  if (window.innerWidth > 1200) {
    ul?.classList.remove('active')
  }

  const categories = useSelector((state) => state.categories.categories.slice(0,-3))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCat())
  }, [dispatch])


  const openSubCategory = function (category) {
    setSubcategories({ subCat: category.children, name: category.name })
    setOpen(true && category.children[0])
  }

  return (
    <>
      <NavListStyled className={navOpen ? 'nav-active' : ''}>
        <Container>
          {!categories.loading &&
            categories.map((category) => (
              <li
                key={category.id}
                onMouseEnter={() => openSubCategory(category)}
              >
                <Link to={'/products/' + category.slug}>{category.name}</Link>
                {category.children[0] && <img src={chevron} width={6} alt='' />}
              </li>
            ))}
          <NavSubCat items={subcategories} open={open} setOpen={setOpen} />
        </Container>
        {open && <Overlay />}
      </NavListStyled>
    </>
  )
}

const NavListStyled = styled.ul`
  position: fixed;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 1;
  transform: translateX(-100%);
  height: 100%;
  transition: all 0.3s;
  font-size: var(--fs-xl);
  width: 100%;

  a:hover {
    color: var(--primary-100);
  }

  &.nav-active {
    transform: translateX(0);
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    border-bottom: 2px solid var(--primary-100);
    position: static;
    font-size: var(--fs-md);
    background: 0;
    transform: translateX(0);
    padding: 0;
    height: fit-content;
    padding-bottom: .25rem;
    & > div {
      flex-direction: row;
      gap: 3.5rem;

      img {
        display: none;
      }
    }
  }
`

export default NavList
