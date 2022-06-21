import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";


function Navigation() {
    return(
        <Fragment>
          <Navbar />
          <Outlet />
        </Fragment>
      );
}

export default Navigation;