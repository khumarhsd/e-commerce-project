import styled from "styled-components"

const SizeContainer = ({sizeVariant, setActiveSize}) => {
  return (
    <SizeWrapper>
    <ul>
      {sizeVariant && <span className='colorText'>Yaddaş:</span>}
      {sizeVariant &&
        sizeVariant?.options?.map((option, index) => (
          <li key={option.id} onClick={() => setActiveSize(index)}>
            <span
              className='size__option'
              tabIndex={index}
              style={{
                backgroundColor: `var(--gray-${(index + 1) * 25})`,
                color: `${index / 2 === 0 ? 'black' : 'white'}`,
              }}
            >
              {option.name}
            </span>
          </li>
        ))}
    </ul>
  </SizeWrapper>
  )
}

const SizeWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li {
    cursor: pointer;
    border-radius: var(--radii);
    border: 2px solid transparent;
    margin: 0;
    padding: 0;
  }

  .size__option {
    display: flex;
    border-radius: var(--radii);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 10%);
    width: 76px;
    height: 36px;
    align-items: center;
    justify-content: center;
  }

  .size__option:focus {
    border: 2px solid var(--gray-100);
  }
`
export default SizeContainer