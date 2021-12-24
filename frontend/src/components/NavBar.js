import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="header-logo">
            <img
              id="logo-nav"
              src="/assets/DzLogo.png"
              alt="Logo Don Zipriano"
            />
          </div>
          <div className="navbar">
            <ul>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/"
                >
                  Reservas
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/"
                >
                  Contacto
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/"
                >
                  Nosotros
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <svg
        class="svg-bot"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 110"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
            <stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,66L24,62.3C48,59,96,51,144,47.7C192,44,240,44,288,51.3C336,59,384,73,432,66C480,59,528,29,576,25.7C624,22,672,44,720,56.8C768,70,816,73,864,78.8C912,84,960,92,1008,86.2C1056,81,1104,62,1152,49.5C1200,37,1248,29,1296,33C1344,37,1392,51,1440,55C1488,59,1536,51,1584,44C1632,37,1680,29,1728,23.8C1776,18,1824,15,1872,14.7C1920,15,1968,18,2016,18.3C2064,18,2112,15,2160,16.5C2208,18,2256,26,2304,27.5C2352,29,2400,26,2448,25.7C2496,26,2544,29,2592,31.2C2640,33,2688,33,2736,27.5C2784,22,2832,11,2880,9.2C2928,7,2976,15,3024,16.5C3072,18,3120,15,3168,20.2C3216,26,3264,40,3312,55C3360,70,3408,84,3432,91.7L3456,99L3456,110L3432,110C3408,110,3360,110,3312,110C3264,110,3216,110,3168,110C3120,110,3072,110,3024,110C2976,110,2928,110,2880,110C2832,110,2784,110,2736,110C2688,110,2640,110,2592,110C2544,110,2496,110,2448,110C2400,110,2352,110,2304,110C2256,110,2208,110,2160,110C2112,110,2064,110,2016,110C1968,110,1920,110,1872,110C1824,110,1776,110,1728,110C1680,110,1632,110,1584,110C1536,110,1488,110,1440,110C1392,110,1344,110,1296,110C1248,110,1200,110,1152,110C1104,110,1056,110,1008,110C960,110,912,110,864,110C816,110,768,110,720,110C672,110,624,110,576,110C528,110,480,110,432,110C384,110,336,110,288,110C240,110,192,110,144,110C96,110,48,110,24,110L0,110Z"
        ></path>
      </svg>
    </>
  );
};
export default NavBar;
