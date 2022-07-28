import styled from 'styled-components'
import { Container } from '../../styles/UI/Container'
import { useState } from 'react'

import Comment from './Comment'

const Specs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('specs')
  return (
    <Wrapper>
      <Container>
        <TabWrapper>
          <ButtonWrapper>
            <Button
              className={activeTab === 'specs' ? 'active' : ''}
              onClick={() => setActiveTab('specs')}
            >
              Texniki Xüsusiyyətləri
            </Button>
            <Button
              className={activeTab === 'comments' ? 'active' : ''}
              onClick={() => setActiveTab('comments')}
            >
              Rəylər
            </Button>
          </ButtonWrapper>
          {activeTab === 'specs' ? (
            <SpecsWrapper>
              <div>
                <Title>Əsas göstəricilər</Title>
                <ListWrapper>
                  <div>
                    <li>İstehsalçı</li>
                    <li>Apple</li>
                  </div>
                  <div>
                    <li>İstehsalçı</li>
                    <li>Apple</li>
                  </div>
                  <div>
                    <li>İstehsalçı</li>
                    <li>Apple</li>
                  </div>
                </ListWrapper>
              </div>
              <ProductDesc>
                <Title>Məhsul haqqında</Title>
                {product.description ? (
                  <p
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></p>
                ) : (
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos aliquid id molestias voluptate aliquam odit
                    pariatur, nostrum minus necessitatibus totam hic maiores
                    numquam ea enim sequi magnam incidunt placeat illo quibusdam
                    quaerat nihil. Illum dolorum distinctio dolor assumenda
                    nihil enim sapiente corporis sed consequatur voluptatum cum
                    modi esse, temporibus vitae labore possimus commodi quos
                    blanditiis incidunt. Adipisci fuga tempore, magni cupiditate
                    deserunt delectus, dicta saepe eveniet, repudiandae ipsam ad
                    pariatur.
                  </p>
                )}
              </ProductDesc>
            </SpecsWrapper>
          ) : (
            <CommentsWrapper>
              <Comment />
              <Comment />
            </CommentsWrapper>
          )}
        </TabWrapper>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
const TabWrapper = styled.div`
  padding: 2rem 0;
  width: 100%;

  .active {
    color: var(--primary-100);
  }

  @media (min-width: 1024px) {
    display: block;
    margin-top: 3rem;
    border-top: 0;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-bottom: 2px solid var(--gray-25);
  border-top: 2px solid var(--gray-25);
  @media (min-width: 1024px) {
    display: block;
    border-top: 0;
  }
`
const Button = styled.button`
  cursor: pointer;
  outline: none;
  text-align: center;
  background-color: transparent;
  border: 0;
  font-weight: bold !important;
  font-size: var(--fs-md);
  color: var(--gray-50);


  @media (min-width: 1024px) {
    font-size: var(--fs-xl);
    font-weight: var(--fw-medium) !important;
    color: var(--gray-50);
    margin-left: 2rem;
  }
`

const SpecsWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 1024px) {
    padding: 0 5rem;
    flex-direction: row;
  }
`
const Title = styled.h3`
  font-size: var(--fs-xl);
  font-weight: var(--fw-medium);
  margin: 2rem 0;
`

const ListWrapper = styled.ul`
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  li {
    color: var(--gray-50);
  }
  @media (min-width: 1024px) {
    & > div {
      margin-right: 3rem;
      gap: 10rem;
    }
  }
`

const ProductDesc = styled.div`
  p {
    color: var(--gray-50);
  }
  @media (min-width: 1024px) {
    max-width: 550px;
  }
`

const CommentsWrapper = styled.div``

export default Specs
