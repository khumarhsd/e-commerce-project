import styled from "styled-components"
import { filterData } from "../../Data/filterData"
import { Container } from "../../styles/UI/Container"

const Filter = () => {
  return (
    <Container>
      <FilterWrapper>
        {/* {filterData.map(el => (
            <p>{el.title}</p>
        ))} */}
    </FilterWrapper>
    </Container>
  )
}

const FilterWrapper = styled.div`
`

export default Filter