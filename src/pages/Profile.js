import styled from "styled-components"
import cart from '../assets/emptyCart.svg'

const Profile = () => {
  return (
    <Wrapper>
      <div>lorem100</div>
      <div>
        <img src={cart} alt="" />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  @media(min-width: 768px){
    grid-template-columns: 1fr 3fr;
    height: 100vh;
    margin: 2rem;
  }
`
export default Profile