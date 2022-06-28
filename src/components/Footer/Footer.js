import styled from 'styled-components'
import FooterIconbar from './FooterIconbar'
import { Container } from '../../styles/Container'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer>
      <FooterContent>
        <Container>
          <Wrapper>
          <FooterIconbar />
          <FooterLinks />
          </Wrapper>
        </Container>
        <Copyright>
          <p>© Tello 2022. Bütün hüquqlar qorunur.</p>
          <div>
            <p>Qaydalar və şərtlər</p>
            <p>Məxfilik siyasəti</p>
          </div>
        </Copyright>
      </FooterContent>
    </footer>
  )
}

const FooterContent = styled.div`
  background-color: #262626;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 4rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const Copyright = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;
  color: #fff;
  opacity: 80%;
  border-top: 1px solid var(--gray-75);
  padding: 1rem;
  gap: 1rem;


  & > div {
    display: flex;
    gap: 1rem;
    
    & > * {
      cursor: pointer;
    }
    & > *:hover {
        color: var(--primary-100);
    }
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem 3rem 1.5rem 4rem;
    flex-direction: row;
    justify-content: space-between;

    & > div {
      display: flex;
      gap: 1rem;
    }
  }
`

export default Footer
