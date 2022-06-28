import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import twitter from '../../assets/twitter.svg'
import styled from 'styled-components'

const FooterIconbar = () => {
  return (
    <FooterIcons>
      <div className='footer__logo'>
        <img src={logo} alt='' />
      </div>
      <Icons>
        <img src={instagram} alt='' />
        <img src={facebook} alt='' />
        <img src={youtube} alt='' />
        <img src={twitter} alt='' />
      </Icons>
    </FooterIcons>
  )
}

const FooterIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .footer__logo {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    align-items: stretch;
  }
`

const Icons = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: .5rem;
  & > * {
    cursor: pointer;
  }
  & > *:hover {
    filter: invert(71%) sepia(60%) saturate(554%) hue-rotate(84deg) brightness(86%) contrast(90%);
  }
`

export default FooterIconbar
