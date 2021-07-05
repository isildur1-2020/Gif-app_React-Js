import React from "react";
import Menu from "../Menu/Menu";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <h1>Gif App</h1>
      <Menu />
      {children}
      <p>
        Powered by{" "}
        <a href="https://developers.giphy.com" target="_blank" rel="noreferrer">
          <i>giphy</i>
        </a>
      </p>
    </div>
  );
};

export default Layout;
