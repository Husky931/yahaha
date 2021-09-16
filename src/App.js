import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./assets/logo.gif";
import appStore from "./assets/appStore.png";
import googleStore from "./assets/googlePlay.png";
import macos from "./assets/macos.png";
import windows from "./assets/windows.png";

{
  /* <img src="./assets/googlePlay.png" alt="google play store link" />
<img src="./assets/appStore.png" alt="app store link" />
<img src="./assets/macos.png" alt="macos link" />
<img src="./assets/windows.png" alt="windows link" /> */
}

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="root">
      <header>
        <div class="header-container">
          <div className="header-left">
            <div
              className="hamburger-menu"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <GiHamburgerMenu />
            </div>
            <img src={logo} className="logo-img" alt="homepage" />
            <nav className={openMenu ? "open" : "nav-text"}>
              <a className={openMenu ? "nav-a-hamburger" : "nav-text"}>Home</a>
              <a className={openMenu ? "nav-a-hamburger" : "nav-text"}>About</a>
            </nav>
          </div>

          <div className="header-right">
            <a className="nav-text">Sign In</a>
          </div>
        </div>
      </header>
      <div class="intro-text-big">
        Ushering in the <span id="gradient-span">next generation</span> of
        entertainment.
      </div>
      <p className="intro-text-desc">
        With our seamless link between reality and virtuality, users get to
        enjoy the diversity of culture, the freedom of creation, and the
        limitless possibilities of unbounded connection.
      </p>
      <div className="download-stores-box">
        <div class="stores-img-group">
          <div className="stores-img-img-holder">
            <img
              src={googleStore}
              className="store-img"
              alt="google play store link"
            />
          </div>
          <div className="stores-img-img-holder">
            <img src={appStore} className="store-img" alt="app store link" />
          </div>
          <div className="stores-img-img-holder">
            <img src={macos} className="store-img" alt="macos link" />
          </div>
          <div className="stores-img-img-holder">
            <img src={windows} className="store-img" alt="windows link" />
          </div>
        </div>
        <p className="download-store-text-bottom">LOG IN TO DOWNLOAD</p>
      </div>
    </div>
  );
}

export default App;
