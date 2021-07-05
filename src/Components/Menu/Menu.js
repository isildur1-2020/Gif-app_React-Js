import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <menu className="Menu">
      <button>
        <Link to="/translate">Search for a gif with AI</Link>
      </button>
      <button>
        <Link to="/search">Find multiple gifs with one word</Link>
      </button>
    </menu>
  );
};

export default Menu;
