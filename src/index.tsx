import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";
import "./index.scss";
import locale from "antd/lib/locale/vi_VN";
import { ConfigProvider } from "antd";
// import "antd/dist/antd.min.css";

const rootElement = document.getElementById("root") as HTMLElement;

render(
  <ConfigProvider autoInsertSpaceInButton={false} locale={locale}>
    <App />
  </ConfigProvider>,
  rootElement
);
