import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <GlobalStyle />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
