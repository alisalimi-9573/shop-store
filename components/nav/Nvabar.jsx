// import React, { useContext, useRef } from "react";
// import LoginIcon from "@mui/icons-material/Login";
// import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import Link from "next/link";
// import { userContext } from "../../contexts/UserContext";

// export default function Nvabar() {
//   const searchInput = useRef(null);
//   const { state, logout } = useContext(userContext);

//   const searchInputHandler = () => {
//     if (searchInput.current) {
//       searchInput.current.classList.toggle("expanded");
//     }
//   };

//   return (
//     <nav className="navbar">
//       <Link href="/">
//         <div className="logo">ExlusiveStore</div>
//       </Link>
//       <div id="menu" className="menu">
//         <ul className="flex gap-4">
//           <li className="menu_items">
//             <Link href={"./"}>Home</Link>
//           </li>
//           <li className="menu_items">
//             <a href="#">Contact</a>
//           </li>
//           <li className="menu_items">
//             <Link href={"./products"}>Products</Link>
//           </li>
//           <li className="menu_items">
//             <a href="#">Sign Up</a>
//           </li>
//         </ul>
//       </div>
//       <div id="basket" className="flex gap-4">
//         <div className="search_box">
//           <input
//             className=" search_input"
//             ref={searchInput}
//             type="search"
//             name="search"
//             id="search"
//             placeholder="what are you looking for?"
//           />
//           <span onClick={searchInputHandler}>
//             <SearchIcon className="search_icon" />
//           </span>
//         </div>
//         <div>
//           {state.isLoggedIn === true ? (
//             <div>
//               <button onClick={logout}>
//                 <SettingsPowerIcon fontSize="small" />
//               </button>
//             </div>
//           ) : (
//             <Link href="./sign-up">
//               <LoginIcon fontSize="small" />
//             </Link>
//           )}
//         </div>
//         <div>
//           {state.isLoggedIn === true ? (
//             <Link href={"./carts"}>
//               <AddShoppingCartIcon fontSize="small" />
//             </Link>
//           ) : (
//             <Link href={"./sign-up"}>
//               <AddShoppingCartIcon fontSize="small" />
//             </Link>
//           )}
//         </div>
//       </div>
//       <div id="ham_menu" className="hamburger hidden">
//         <MenuIcon />
//       </div>
//     </nav>
//   );
// }

import React, { useState, useContext, useRef } from "react";
import LoginIcon from "@mui/icons-material/Login";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { userContext } from "../../contexts/UserContext";

export default function Nvabar() {
  const searchInput = useRef(null);
  const { state, logout } = useContext(userContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="logo">ExlusiveStore</div>
      </Link>

      {/* منوی اصلی */}
      <div className="menu">
        <ul className="flex gap-4">
          <li className="menu_items">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="menu_items">
            <a href="#">Contact</a>
          </li>
          <li className="menu_items">
            <Link href={"/products"}>Products</Link>
          </li>
          <li className="menu_items">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </div>

      {/* دکمه‌های سمت راست */}
      <div id="basket" className="flex gap-4">
        <div className="search_box">
          <input
            className="search_input"
            ref={searchInput}
            type="search"
            placeholder="What are you looking for?"
          />
          <span>
            <SearchIcon className="search_icon" />
          </span>
        </div>
        <div>
          {state.isLoggedIn ? (
            <button onClick={logout}>
              <SettingsPowerIcon fontSize="small" />
            </button>
          ) : (
            <Link href={"/sign-up"}>
              <LoginIcon fontSize="small" />
            </Link>
          )}
        </div>
        <div>
          <Link href={state.isLoggedIn ? "/carts" : "/sign-up"}>
            <AddShoppingCartIcon fontSize="small" />
          </Link>
        </div>
      </div>

      {/* آیکون همبرگری */}
      <div id="ham_menu" className="hamburger" onClick={toggleDrawer}>
        <MenuIcon />
      </div>

      {/* منوی کشویی */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <CloseIcon className="close-icon" onClick={toggleDrawer} />
        </div>
        <ul className="drawer-menu">
          <li>
            <Link href={"/"} onClick={toggleDrawer}>
              Home
            </Link>
          </li>
          <li>
            <a href="#" onClick={toggleDrawer}>
              Contact
            </a>
          </li>
          <li>
            <Link href={"/products"} onClick={toggleDrawer}>
              Products
            </Link>
          </li>
          <li>
            <a href="#" onClick={toggleDrawer}>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
