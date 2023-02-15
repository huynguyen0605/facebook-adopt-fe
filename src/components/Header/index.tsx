import React from "react";
import { Button, Space } from "antd";
import "./index.scss";

function Header() {
  return (
    <div className="header">
      <div className="leftSide">
        <Button>{"Create React App"} </Button>
      </div>
      <Space className="rightSide">
        <Button>{"Docs"} </Button>
        <Button>{"Help"} </Button>
        <Button>{"GitHub"} </Button>
      </Space>
    </div>
  );
}

export default Header;
