import styled from 'styled-components'

const SelectMenu = ({ data, setdata }) => {
  const localData = JSON.parse(localStorage.getItem('products'))
  const handleSelect = (value) => {
    const sortData = data.length === 0 ? localData : data
    if (value === 'asc') {
      setdata(
        sortData.sort((a, b) => {
          return a.price.raw - b.price.raw
        })
      )
    } else if (value === 'desc') {
      setdata(
        sortData.sort((a, b) => {
          return b.price.raw - a.price.raw
        })
      )
    } else {
      setdata(sortData.sort((a, b) => a.name.localeCompare(b.name)))
    }
  }
  return (
    <Wrapper>
      <select
        defaultValue={'a-to-z'}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value='a-to-z'>A-dan Z-yə</option>
        <option value='asc'>Ucuzdan Bahaya</option>
        <option value='desc'>Bahadan Ucuza</option>
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  select {
    outline: none;
    padding: 0.75rem 1rem;
    border-radius: var(--radii);
    cursor: pointer;
  }
`

export default SelectMenu
