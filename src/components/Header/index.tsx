import React from "react";
import { Button, Checkbox, Space } from "antd";
import "./index.scss";

function Header() {
  return (
    <div className="header">
      <div className="leftSide">
        {/* <div>
          <Checkbox>Step 1</Checkbox>
          <Checkbox>Step 2</Checkbox>
          <Checkbox>Step 3</Checkbox>
        </div> */}
        <div>
          <Button>{"Create Scenario"} </Button>
        </div>
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
