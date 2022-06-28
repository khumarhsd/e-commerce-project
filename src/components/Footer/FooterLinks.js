import { footerData } from '../../Data/footerData'
import LinkGroup from './LinkGroup'
import styled from 'styled-components'

const FooterLinks = () => {
  return (
    <>
      {footerData.map(({ title, body }) => (
        <LinkContainer key={Math.random()}>
          <LinkGroupTitle>{title}</LinkGroupTitle>
          <LinkGroup title={title} body={body} />
        </LinkContainer>
      ))}
    </>
  )
}

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  &:nth-child(4) {
    align-items: flex-start;
    margin: 0 auto 2rem;
    h3 {
      align-self: center;
    }
  }
  @media (min-width: 768px) {
    align-items: stretch;
    justify-content: flex-start;

    &:nth-child(4) {
      align-items: stretch;
      justify-content: flex-start;
      margin: 0;

      h3 {
        align-self: stretch;
      }
    }
  }
`

const LinkGroupTitle = styled.h3`
  font-size: var(--fs-xl);
  font-weight: var(--fw-medium);
  color: #fff;
  display: flex;
  margin-bottom: 1rem;
  margin-top: 2.5rem;
`

export default FooterLinks
