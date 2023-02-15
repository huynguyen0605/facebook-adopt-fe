import React from "react";
import Header from "../Header";
import SidebarRight from "../SidebarRight";
import SidebarLeft from "../SidebarLeft";
import Body from "../Body";
import "./index.scss";
import { Divider } from "antd";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Divider />
      <div className="main-container">
        <SidebarLeft />
        {/* <Body />
        <SidebarRight /> */}
      </div>
    </div>
  );
};
