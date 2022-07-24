import { GlobalStyle } from './styles/GlobalStyles'
import Navbar from './components/Navbar/Navbar'
import Pages from './pages/Pages'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
        <GlobalStyle />
        <Navbar />
        <Pages />
        <Footer />
    </div>
  )
}

export default App
