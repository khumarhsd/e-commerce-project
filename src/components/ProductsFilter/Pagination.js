import { Container } from '../../styles/UI/Container'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

const Pagination = ({ setCurrentPage, pageCount }) => {
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }
  return (
    <Wrapper>
      <Container>
        <ReactPaginate
          previousLabel={
            <span className='navigator'>
              <IoIosArrowBack />
            </span>
          }
          nextLabel={
            <span className='navigator'>
              <IoIosArrowForward />
            </span>
          }
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          pageClassName={'page__link'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
        />
      </Container>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 0 auto;
  li,
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .navigator {
    width: 36px;
    height: 36px;
    border-radius: 100%;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    &:hover {
      transition: all 0.3s;
      background-color: #e0e0e0;
    }
  }
  .page__link {
    font-size: var(--fs-xl);
    height: 32px;
    width: 32px;
    cursor: pointer;
    &:hover {
      background-color: var(--primary-100);
      height: 32px;
      width: 32px;
      border-radius: var(--radii);
      color: #fff;
    }
  }
  .pagination__link--active {
    background-color: var(--primary-100);
    height: 32px;
    width: 32px;
    border-radius: var(--radii);
    color: #fff;
  }
  @media (min-width: 768px) {
    grid-column: 2/3;
  }
`

export default Pagination
