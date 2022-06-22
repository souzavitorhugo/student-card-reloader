import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/navigation";

export default function AppLayout({ headerProps }) {
  return (
    <Fragment>
      
      <Header {...headerProps} />
      <main id="content" role="main" className="container">
        <Outlet />
      </main>
    </Fragment>
  );
}
