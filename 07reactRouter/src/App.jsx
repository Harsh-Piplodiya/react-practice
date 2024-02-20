import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Outlet /> {/* in this 'Outlet' components can change, i.e. the 'Header' and the 'Footer' will remain static but the components in 'Outlet' can change */}
      <Footer />
    </>
  )
}

export default App;
