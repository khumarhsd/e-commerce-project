import { Container } from '../../styles/UI/Container'
import styled from 'styled-components'
import Offer from './Offer'
import box from '../../assets/box.svg'
import card from '../../assets/card-pos.svg'
import medal from '../../assets/medal-star.svg'


const Offers = () => {
  return (
    <Container>
        <Wrapper>
            <Offer
                image={box}
                title={'Çatdırılma'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit '}
            />
            <Offer
                image={card}
                title={'Kredit'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit '}
            />
            <Offer
                image={medal}
                title={'Zəmanət'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit '}
            />
        </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    padding: 5rem 3rem;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`


export default Offers