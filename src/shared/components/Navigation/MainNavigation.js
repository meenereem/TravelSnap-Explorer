import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = (props) => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = (props) => {
    setDrawerIsOpen(false);
  };

  return (
    <MainHeader>
      <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        {drawerIsOpen && (
          <SideDrawer>
            <nav className="main-navigation__drawer-nav" onClick={closeDrawer}>
              <NavLinks />
            </nav>
          </SideDrawer>
        )}
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">TravelSnap Explorer</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </React.Fragment>
    </MainHeader>
  );
};

export default MainNavigation;
