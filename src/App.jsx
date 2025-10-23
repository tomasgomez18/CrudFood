import './App.css'
import { BrowserRouter } from 'react-router'
import Menu from './components/shared/Menu'
import Footer from './components/shared/footer'


function App() {


  return (
    <>

  <BrowserRouter>
    <Menu> </Menu>
    <Footer/>
  </BrowserRouter>  
    </>
  ) 
}

export default App
