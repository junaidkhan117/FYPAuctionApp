import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import SellerNav from '../../components/SellerNav'

const AppContainer = () => {

  const { pathname } = useLocation();

  return (
    <>
    {pathname === '/productdetails' || pathname === '/listinginfo' ? <SellerNav/> : <NavBar/> }
    
    <Outlet/>
    </>
  )
}

export default AppContainer