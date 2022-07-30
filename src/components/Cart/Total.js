import styled from 'styled-components'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { emptyCart } from '../../redux/actions/cart'

const Total = ({ total }) => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <TotalContent>
        <h2>Ümumi</h2>
        <div>
          <p>Məbləğ</p>
          <p>{total} ₼</p>
        </div>
        <div>
          <p>Çatdırılma</p>
          <p>0.00 ₼</p>
        </div>
        <div>
          <p>Hədiyyə paketi</p>
          <p>5.00 ₼</p>
        </div>
        <div>
          <p>Promo kod</p>
          <p>-5.00 ₼</p>
        </div>
        <Hr />
        <div>
          <p>Cəmi</p>
          <p>{total} ₼</p>
        </div>
      </TotalContent>
      <EmptyrCart>
        <button onClick={() => dispatch(emptyCart())}>Səbəti Təmizlə</button>
      </EmptyrCart>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  @media(min-width: 768px){
    margin-top: 2.5rem;
  }
`

const TotalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: #fff;
  height: min-content;
  padding: 1rem;
  border-radius: 16px;
  h2 {
    font-weight: var(--fw-medium);
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  div:last-of-type {
    display: flex;
    justify-content: space-between;
    font-weight: var(--fw-medium);
    p:nth-of-type(2) {
      color: var(--red);
    }
  }
`
const EmptyrCart = styled.div`
  button{
    color: #fff;
    width: 100%;
    gap: 1rem;
    border-radius: var(--radii);
    font-size: var(--fs-lg);
    padding: 0.75rem 2.5rem;
    margin: 1rem 0;
    background-color: var(--primary-100);
  }
  button:hover{
    background-color: #2db563;
    transition: all .3s;
  }
`
const Hr = styled.span`
  width: 100%;
  height: 1px;
  background-color: #828282;
`

export default Total
