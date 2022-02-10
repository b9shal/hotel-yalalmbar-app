import Footer from "./Footer";
import NavBar from "./NavBar"


const Layout: React.FC = ({ children }) => {
  return(
    <div>
      <NavBar/>
      <div className="pt-36 pb-20">
        { children }
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;