import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { lsKey } from "./LoginForm";

export default function Navigation() {
  const history = useHistory();
  function handleClick() {
    const token = localStorage.getItem(lsKey);
    const baseURL = "http://localhost:9000/api/logout";
    const api = axios.create({
      baseURL,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    api
      .post(baseURL)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    localStorage.removeItem(lsKey);
    history.push("/logout");
  }
  return (
    <nav className="navbar">
      <NavLink to="/">LOGIN.</NavLink>
      <NavLink to="/friends">FRIENDLIST.</NavLink>
      <NavLink to="/add">ADDFRIEND.</NavLink>
      <button onClick={handleClick}>LOGOUT.</button>
    </nav>
  );
}
