import Offers from '../components/Offers/Offers'
import Partners from '../components/Partners/Partners'
import ProductCards from '../components/ProductCards/ProductCards'
import Showcase from '../components/Showcase/Showcase'
import Advertisement from '../components/Advertisement/Advertisement'

const Home = () => {
  return (
    <div>
      <Showcase />
      <Advertisement />
      <ProductCards />
      <Offers />
      <Partners />
    </div>
  )
}

export default Home