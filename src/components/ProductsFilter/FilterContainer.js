import styled from 'styled-components'
import { Container } from '../../styles/UI/Container'
import filterIcon from '../../assets/filter.svg'
import { useState } from 'react'
import FilterOptions from './FilterOptions'

const FilterContainer = ({ filter, deleteArr, addArr }) => {
  const [active, setactive] = useState(false)
  return (
    <Container>
      <FilterWrapper>
        <FilterButton
          className='filter-button'
          onClick={() => setactive(!active)}
        >
          <img src={filterIcon} alt='' />
          <span onClick={() => setactive(!active)}>Filterləmələr</span>
        </FilterButton>
        <OptionsWrapper className={active && 'active-filter'}>
          <FilterOptions
            filter={filter}
            deleteArr={deleteArr}
            addArr={addArr}
          />
        </OptionsWrapper>
      </FilterWrapper>
    </Container>
  )
}

const FilterWrapper = styled.div`
  .active-filter {
    display: block;
  }

`
const OptionsWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`
const FilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  width: 100%;

  border-bottom: 1px solid #e0e0e0;

  @media (min-width: 768px) {
    display: none;
  }
`

export default FilterContainer
