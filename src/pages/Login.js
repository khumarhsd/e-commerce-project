import authImg from '../assets/authImg.svg'
import { BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import styled from 'styled-components'
import { Container } from '../styles/UI/Container'
import { Link } from 'react-router-dom'

const Login = ({ setAuth }) => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <h2>Daxil ol</h2>
          <Icons>
            <div className='icon'>
              <span>
                <FaFacebookF />
              </span>
              <p>Facebook ilə</p>
            </div>
            <div className='icon'>
              <span className='google'>
                <BsGoogle />
              </span>

              <p>Google ilə</p>
            </div>
          </Icons>
          <p>və ya</p>
          <FormStyled>
            <div>
              <label>E-mail</label>
              <input
                type='email'
                name=''
                id=''
                placeholder='nümunə@gmail.com'
              />
            </div>
            <button>Daxil ol</button>
            <p>
            Hesabınız yoxdur? <Link to={'/register'}>Qeydiyyatdan keçin</Link>
          </p>
          </FormStyled>
        </FormContainer>
        <AuthImg>
          <img src={authImg} alt='' />
          <p>
            Hesabınız yoxdur? <Link to={'/register'}>Qeydiyyatdan keçin</Link>
          </p>
        </AuthImg>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(1fr);
  a {
    color: var(--blue-100);
  }
  h2 {
    color: var(--gray-75);
    font-weight: var(--fw-medium);
  }

  @media(min-width: 768px){
    grid-template-columns: repeat(2, 1fr);

  }
  
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  @media(min-width: 768px){
    width: 60%;


  }
`
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  .icon {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  svg {
    color: #fff;
  }
  span {
    background-color: #4267b2;
    width: 32px;
    height: 32px;
    padding: 0.3rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .google {
    background-color: #db4437;
  }
`
const FormStyled = styled.form`
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  input {
    background-color: #f2f2f2;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    font-size: var(--fs-lg);
  }
  button {
    color: #fff;
    width: 100%;
    gap: 1rem;
    border-radius: var(--radii);
    font-size: var(--fs-lg);
    padding: 0.75rem 2.5rem;
    margin: 2rem 0;
    background-color: var(--primary-100);
  }
  button:hover {
    background-color: #2db563;
    transition: all 0.3s;
  }
  p{
    display: block;
  }
  @media (min-width: 768px) {
    p{
    display: none;
  }
  }
`

const AuthImg = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  
  img {
    max-width: 600px;
    width: 100%;
    object-fit: cover;
  }
`

export default Login
