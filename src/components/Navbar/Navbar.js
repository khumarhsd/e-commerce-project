import { useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/UI/Container'
import NavHeader from './NavHeader'
import NavList from './NavList'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <NavbarWrapper>
      <NavbarContent>
        <Container>
          <NavHeader navOpen={navOpen} setNavOpen={setNavOpen} />
        </Container>
          <NavList navOpen={navOpen} />
      </NavbarContent>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  height: 100px;
  position: relative;
  z-index: 100;
`
const NavbarContent = styled.nav`
  margin-bottom: 2rem;
`

export default Navbar
