import React,{useState} from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Sabari1 from 'D:/Portfolio/portfolio/src/Sabari/Photo/logo.png'

const Navbar=()=>{

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return(
    <>
     <nav>
        <div class="logo">
          <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={Sabari1} sx={ {width: 50, height: 50} }/>
          <a href="#">Sabari</a>
          </Stack>
        </div>
        <ul className={isOpen ? 'showmenu' : ''}>
            <li><button className="btn"><a href="#about">Home</a></button></li>
            <li><button className="btn"><a href="">About</a></button></li>
            <li><button className="btn"><a href="">Project</a></button></li>
            <li><button className="btn"><a href="">Resume</a></button></li>
            <li><button className="btn"><a href="">Contact</a></button></li>
        </ul>
        <div class="menu" onClick={toggleNavbar}>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
        </div>
    </nav>
    </>
  )
}
export default Navbar;

// 2

// import React, { useState } from 'react'

// const Navbar = () => {


//   return (
//     <>
//     <div className="App">
//       <nav className="navbar">
//         <div className="container">
//           <div className="logo">Logo</div>
//           <ul className="nav-links">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//           <div className="burger">
//             <div className="line1"></div>
//             <div className="line2"></div>
//             <div className="line3"></div>
//           </div>
//         </div>
//       </nav>
//     </div>
//     </>
//   )
// }

// export default Navbar


// 1

// import React, { useState } from 'react'

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//     <div className="App">
//       <nav className="navbar">
//         <div className="container">
//           <div className="logo">Logo</div>
//           <ul className={isOpen ? 'nav-links-active' : 'nav-links' }>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//           <div className="burger" onClick={toggleNavbar}>
//             <div className="line1"></div>
//             <div className="line2"></div>
//             <div className="line3"></div>
//           </div>
//         </div>
//       </nav>
//     </div>
//     </>
//   )
// }

// export default Navbar