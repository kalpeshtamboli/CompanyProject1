import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleClinetLogin = () => {
    props.setLoginDialog(true);
  };
  return (
    <div
      className="flex justify-between px-8 items-center"
      style={{ height: "8rem" }}
    >
      <Link to="/">
        <div>
          <img src="/images/creativewebo-logo.svg" className="w-56 " />
        </div>
      </Link>
      <div className="hidden md:block">
        <ul className="flex space-x-7 items-center text-md text-white ">
          <Link to="/case studies">
            <li> Case Studies</li>
          </Link>
          <Link to="services">
            <li>Services</li>
          </Link>
          <Link to="/contactus">
            <li>Contact Us</li>
          </Link>
          <li
            className="text-white bg-blue-500 py-2 px-7 rounded"
            onClick={handleClinetLogin}
          >
            <button>Client Login</button>
          </li>
          <li className="border p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}
