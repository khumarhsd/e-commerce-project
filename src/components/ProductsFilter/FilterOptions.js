import { useState } from 'react'
import { filterData } from '../../Data/filterData'
import styled from 'styled-components'
import Checkbox from './Checkbox'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'

const FilterOptions = ({ deleteArr, addArr }) => {
  const [checked, setChecked] = useState([])
  const [show, setshow] = useState(true)

  const handleOnChange = (event) => {
    let selected = [...checked]
    let updatedList = [...checked]
    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
      selected.push(event.target.value)
      addArr(selected)
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1)
      selected.splice(checked.indexOf(event.target.value), 1)
      deleteArr(selected)
    }
    setChecked(updatedList)
  }
  return (
    <Wrapper>
      <FilterTitle>
        <div>
          <p>Brend</p>
          <span>({filterData.length})</span>
        </div>
        {show ? (
          <AiOutlinePlus onClick={() => setshow(!show)} />
        ) : (
          <AiOutlineMinus onClick={() => setshow(!show)} />
        )}
      </FilterTitle>
      {!show &&
        filterData.map((brand) => (
          <FilterOptionsStyled key={brand.title}>
            <Checkbox change={handleOnChange} value={brand.title} />
            <p>{brand.title}</p>
          </FilterOptionsStyled>
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.div``

const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #bbbbbb;
  margin-top: 2rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  p {
    font-weight: var(--fw-medium);
  }
  span {
    color: #bbbbbb;
    font-size: var(--fs-sm);
  }
  svg {
    font-size: 20px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const FilterOptionsStyled = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export default FilterOptions
