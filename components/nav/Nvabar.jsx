import React, { useContext, useRef } from "react";
import LoginIcon from "@mui/icons-material/Login";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { userContext } from "../../contexts/UserContext";

export default function Nvabar() {
  const searchInput = useRef(null);
  const { state, logout } = useContext(userContext);

  const searchInputHandler = () => {
    // console.log("ok");
    if (searchInput.current) {
      searchInput.current.classList.toggle("expanded");
    }
  };

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="logo">ExlusiveStore</div>
      </Link>
      <div id="menu" className="menu">
        <ul className="flex gap-4">
          <li className="menu_items">
            <a href="#">home</a>
          </li>
          <li className="menu_items">
            <a href="#">contact</a>
          </li>
          <li className="menu_items">
            <a href="#">about</a>
          </li>
          <li className="menu_items">
            <a href="#">sign up</a>
          </li>
        </ul>
      </div>
      <div id="basket" className="flex gap-4">
        <div className="search_box">
          <input
            className=" search_input"
            ref={searchInput}
            type="search"
            name="search"
            id="search"
            placeholder="what are you looking for?"
          />
          <span onClick={searchInputHandler}>
            <SearchIcon className="search_icon" />
          </span>
        </div>
        <div>
          {state.isLoggedIn === true ? (
            <div>
              <button onClick={logout}>
                <SettingsPowerIcon fontSize="small" />
              </button>
            </div>
          ) : (
            <Link href="./sign-up">
              <LoginIcon fontSize="small" />
            </Link>
          )}
        </div>
        <div>
          <Link href={"./carts"}>
            <AddShoppingCartIcon fontSize="small" />
          </Link>
        </div>
      </div>
      <div id="ham_menu" className="hamburger hidden">
        <MenuIcon />
      </div>
    </nav>
  );
}
