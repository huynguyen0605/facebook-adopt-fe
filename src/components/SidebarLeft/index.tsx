import React from "react";
import Item from "./Item";

function SidebarLeft() {
  return (
    <div className="sidebar-left">
      <Item text={"Welcome"} />
      <Item text={"Getting started"} />
      <Item text={"Development"} />
      <Item text={"Style and assets"} />
    </div>
  );
}

export default SidebarLeft;
