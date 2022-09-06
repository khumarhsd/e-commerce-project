import authImg from '../assets/authImg.svg'
import { BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import styled from 'styled-components'
import { Container } from '../styles/UI/Container'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createUser } from '../redux/actions/user'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const Register = ({ setAuth }) => {
  const dispatch = useDispatch()

  const schema = yup
    .object({
      firstname: yup.string().required('Ad tələb olunur'),
      email: yup.string().email().required('Email tələb olunur'),
      phone: yup.string(),
      checkbox: yup
        .boolean()
        .isTrue('İstifadəçi şərtləri qəbul edilməlidir')
        .required('İstifadəçi şərtləri qəbul edilməlidir'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  
  const onSubmit = ({firstname,email,phone}) => {
    console.log('hey')
    const user = {
      firstname: firstname,
      email: email,
      phone: phone,
    }
    dispatch(createUser(user))
  }

  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <h2>Qeydiyyat</h2>
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
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Ad, Soyad</label>
              <input
                type='text'
                name='firstname'
                id='firstname'
                placeholder='Ad və soyadınızı daxil edin'
                ref={register}
                {...register('firstname')}
              />
              <span className='error'>{errors.firstname?.message}</span>
            </div>

            <div>
              <label>E-mail</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='nümunə@gmail.com'
                ref={register}
                {...register('email')}
              />
              <span className='error'>{errors.email?.message}</span>
            </div>

            <div>
              <label>Mobil nömrə</label>
              <input
                type='text'
                name='phone'
                id='phone'
                placeholder='077-000 - 00 - 00'
                ref={register}
                {...register('phone')}
              />
              <span className='error'>{errors.phone?.message}</span>
            </div>
            <div>
              <label>Şifrə</label>
              <input
                type='password'
                name=''
                id='password'
                placeholder='Şifrənizi daxil edin'
                ref={register}
                {...register('password')}
              />
              
            <span className='error'>{errors.password?.message}</span>
            </div>

            <div>
              <input type='checkbox'  name='checkbox'  ref={register} {...register('password')}/>
              <p> İstifadəçi şərtləri ilə razıyam</p>
            </div>
            <button type='submit'>Qeydiyyat</button>
          </FormStyled>
        </FormContainer>
        <AuthImg>
          <img src={authImg} alt='' />
          <p className='navigate'>
            Artıq hesabınız var? <Link to={'/login'}>Daxil olun </Link>
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

  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
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
  div:nth-last-of-type(1) {
    flex-direction: row;
    align-items: center;
    height: min-content;
    input {
      margin: 0;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      outline: none;
    }
  }
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
    margin-bottom: 2rem;
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
  .error {
    color: var(--red);
    margin-top: -1.25rem;
    margin-bottom: 1rem;
  }
  .navigate {
    display: none;
  }
  @media (min-width: 768px) {
    .navigate {
      display: block;
    }
  }
`

const AuthImg = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    max-width: 600px;
    width: 100%;
    object-fit: cover;
  }
`

export default Register
