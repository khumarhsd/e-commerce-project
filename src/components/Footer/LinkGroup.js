import styled from 'styled-components'
import { Link } from 'react-router-dom'


const LinkGroup = ({body}) => {
    return(
        <>
            {body.map(({title, url, icon}) => (
                <StyledLink key={Math.random()} to={'/'}>{icon}{title}</StyledLink>
            ))} 
        </>
    )
}

const StyledLink = styled(Link)`
    font-size: var(--fs-md);
    color: #fff;
    opacity: 80%;
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 250px;
    line-height: 1.5rem;

    &:hover {
        color: var(--primary-100);
    }
`

export default LinkGroup