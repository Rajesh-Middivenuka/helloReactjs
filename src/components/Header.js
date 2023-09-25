import logos from "../assests/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btn, setBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logos} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li>Contact Us</li>
          </Link>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                btn === "login" ? setBtn("logout") : setBtn("login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
