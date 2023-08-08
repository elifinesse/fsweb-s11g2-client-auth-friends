import { NavLink } from "react-router-dom";

export default function Navigation() {
  return;
  <nav className="navbar">
    <NavLink to="/login">LOGIN.</NavLink>
    <NavLink to="/friends">FRIENDLIST.</NavLink>
    <NavLink to="/add">ADDFRIEND</NavLink>
    <p>LOGOUT.</p>
  </nav>;
}
