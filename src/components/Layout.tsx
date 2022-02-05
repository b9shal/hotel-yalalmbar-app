import NavBar from "./NavBar"


const Layout: React.FC = ({ children }) => {
  return(
    <div>
      <NavBar/>
      { children }
    </div>
  )
}

export default Layout;