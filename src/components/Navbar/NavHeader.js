import logo from '../../assets/logo.svg'
import HeaderIcons from './HeaderIcons'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavHeader = ({ navOpen, setNavOpen }) => {
  return (
    <HeaderWrapper>
      <div
        onClick={() => {
          setNavOpen(!navOpen)
        }}
        className={`menu-btn ${navOpen ? 'active' : ''}`}
      >
        <span></span>
      </div>
      <Link to={'/'}>
        <img src={logo} className='logo' alt='' />
      </Link>
      {/* <SearchBar /> */}
      <HeaderIcons />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr;
  justify-content: space-between;
  margin: 0.75rem 0;
  align-items: center;
  a {
    grid-column: 2/3;
    width: fit-content;
  }
  .logo {
    width: 75%;
  }

  .menu-btn {
    width: 2rem;
    height: 30px;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .menu-btn span,
  .menu-btn span::before,
  .menu-btn span::after {
    background: black;
    border-radius: 3px;
    content: '';
    position: absolute;
    top: 25%;
    width: 2rem;
    height: 0.17rem;
    transition: 0.3s ease-in-out;
  }

  .menu-btn span::before {
    margin-top: -10px;
  }

  .menu-btn span::after {
    margin-top: 10px;
  }

  .menu-btn.active span {
    background: transparent;
  }

  .menu-btn.active span::before {
    margin-top: 0;
    transform: rotate(45deg);
  }

  .menu-btn.active span::after {
    margin-top: 0;
    transform: rotate(-45deg);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr 300px;

    a {
      grid-column: 1/2;
    }
    .logo {
      width: 100%;
    }

    .menu-btn {
      display: none;
    }
  }
`

export default NavHeader
