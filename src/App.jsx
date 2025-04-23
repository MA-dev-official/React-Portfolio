import  Header  from './components/Header/Header.jsx';
import  Footer  from './components/Footer/Footer.jsx'
import useSwipeNavigation from './hooks/useSwipeNavigation.js'
import  {Outlet} from 'react-router-dom';

function App() {
  
useSwipeNavigation()
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
