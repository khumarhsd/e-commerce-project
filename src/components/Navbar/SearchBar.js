import styled from 'styled-components'
import { RiSearch2Line } from 'react-icons/ri'

const SearchBar = () => {
  return (
    <SearchWrapper>
      <RiSearch2Line fill='gray' />
      <form>
        <Input type='text' placeholder='Axtarış....' />
      </form>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: center;

  & > :first-child {
    margin-right: -1.75rem;
    z-index: 1;
  }
  form {
    width: 100%;
  }

  @media (min-width: 1024px) {
    grid-column: 2/3;
  }
`

const Input = styled.input`
  outline: none;
  border: 1px solid #e4e9f2;
  border-radius: var(--radii);
  background-color: #f7f9fc;
  padding: 0.7rem 2.2rem;
  width: 100%;
  background-color: var(--gray-25);
  align-self: center;
`

export default SearchBar
