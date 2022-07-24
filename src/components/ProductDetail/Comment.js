import styled from 'styled-components'
import star from '../../assets/star.svg'
import emptyStar from '../../assets/emptyStar.svg'

const Comment = () => {
  return (
    <Wrapper>
      <Rating>
        <p>4</p>
        <div>
          <img src={star} alt='' />
          <img src={star} alt='' />
          <img src={star} alt='' />
          <img src={star} alt='' />
          <img src={emptyStar} alt='' />
        </div>
      </Rating>
      <UserWrapper>
        <div>
        <h3>Gunel Mammadova</h3>
        <p>5 gün əvvəl</p>
        </div>
        <p className='about'>Yaddaş - 64, Rəng - Qara</p>
        <p className='comment'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis
          viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh tortor
          sit. Consectetur sit auctor odio quis suspendisse tincidunt quis. Et
          tristique amet aenean nibh porttitor quis aliquam integer. Consectetur
          lacus, volutpat malesuada libero. Sollicitudin libero pharetra a.
        </p>
      </UserWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  @media (min-width: 1024px) {
    flex-direction: row;
  gap: 3rem;

  }
`
const Rating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  margin: 1rem auto;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 1rem;

  p {
    font-size: 72px;
    text-align: center;
    margin-bottom: 1.2rem;
  }

  & > div{
    display: flex;
    gap: .75rem;
  }

  img {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 1024px) {
    border-right: 1px solid #bdbdbd;
    border-bottom: 0;
    padding-right: 1rem;
    padding-left: 3rem;
    padding-bottom: 0;
    margin: 1rem 0;
    & > div{
    display: flex;
    gap: 1rem;
  }
    img {
      width: 30px;
      height: 30px;
    }
  }
`

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & >div{
    p{
        display: none;
    }
  }

  h3 {
    color: var(--gray-75);
    font-weight: var(--fw-medium);
    font-size: var(--fs-xl);
  }
  .about {
    font-size: var(--fs-xs);
  }
  .comment {
    color: var(--gray-75);
    max-width: 900px;
    line-height: 1.5rem;
  }
  @media (min-width: 1024px) {
    align-items: stretch;
    & >div{
    display: flex;
    justify-content: space-between;
    p{
        display: block;
        font-size: var(--fs-sm);
    }
  }
  }
`

export default Comment
