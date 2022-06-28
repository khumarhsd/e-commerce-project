import styled from 'styled-components'

const Offer = ({image, title, description}) => {
  return (
    <OfferWrapper>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </OfferWrapper>
  )
}

const OfferWrapper = styled.div`
  margin: 0 auto;
  h2{
    margin: 2rem 0;
    font-weight: var(--fw-medium);
    color: var(--gray-100);
  }
  p{
    line-height: 1.5rem;
  }
`

export default Offer