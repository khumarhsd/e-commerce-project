import Advertisement from '../Advertisement/Advertisement'
import ProductsRow from './ProductsRow'

const ProductSection = ({products}) => {
  const getData = (slug) => {
    const data = []
    /* eslint-disable */
    products.products.map((product) => {
      /* eslint-disable */
      product.categories.map((item) => {
        if (item.slug === slug) {
          data.push(product)
        }
      })
    })
    return data
  }



  return (
    <>
      <ProductsRow
        data={getData('top-selling')}
        title={'Ən çox satılan məhsullar'}
        loading={products.loading}
        slug={'top-selling'}
      />
      <ProductsRow
        data={getData('new-arrivals')}
        title={'Yeni gələn məhsullar'}
        loading={products.loading}
        slug={'new-arrivals'}
      />

      <Advertisement />
      <ProductsRow
        data={getData('new-accessories')}
        title={'Yeni gələn aksessuarlar'}
        loading={products.loading}
        slug={'new-accessories'}
      />
    </>
  )
}

export default ProductSection
