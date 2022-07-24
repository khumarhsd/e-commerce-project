import { useSelector, useDispatch } from 'react-redux'
import { fetchCat } from '../../redux/actions/categories'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Container } from './Container';

const BreadCrumbs = ({product}) => {


    const categories = useSelector((state) => state.categories.categories)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchCat())
    }, [dispatch])
  
  return (
    <BreadCrumbsStyled>
    <Container>
    <Link to='/'>Ana səhifə</Link>

    </Container>
    </BreadCrumbsStyled>
  )
}

const BreadCrumbsStyled = styled.div`
`

export default BreadCrumbs