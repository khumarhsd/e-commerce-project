import styled from "styled-components"

const ColorContainer = ({colorVariant, setActiveColor}) => {
  return (
    <ColorWrapper>
              <ul>
                {colorVariant && <span className='colorText'>Rəng:</span>}
                {colorVariant &&
                  colorVariant?.options?.map((option, index) => (
                    <li
                      key={option.id}
                      tabIndex={index}
                      onClick={() => setActiveColor(index)}
                    >
                      <span
                        className='color__swatch'
                        style={{
                          backgroundColor: `var(--${option.name.toLowerCase()})`,
                        }}
                      ></span>
                    </li>
                  ))}
              </ul>
            </ColorWrapper>
  )
}

const ColorWrapper = styled.div`
width: 100%;
  .colorText {
    color: var(--gray-75);
    margin-bottom: 0.5rem;
  }
  ul {
    display: flex;
    align-items: center;
    gap: .25rem;
  }

  li {
    cursor: pointer;
    border-radius: 100%;
    padding: 6px;
  }
  li:focus {
    border: 2px solid var(--primary-100);
    padding: 4px;
  }

  .color__swatch {
    display: block;
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 10%);
  }


  @media(min-width: 768px) {
    ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  }
`

export default ColorContainer