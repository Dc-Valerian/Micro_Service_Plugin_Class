
import Footer from '../Blocks/Footer'
import Header from '../Blocks/Header'
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout