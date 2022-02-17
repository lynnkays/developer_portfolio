import React, {useState} from 'react';
import Navbar from './Navbar';
import "../styles/global.css";
import SideMenu from './sidemenu';

const Layout = ({children}) => {
      const [showMenu, setShowMenu] = useState(false);
  return (
   <>
    <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
   <section>
       <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
   </section>
   <section>
       {children}
   </section>
   </>
  )
};

export default Layout;
