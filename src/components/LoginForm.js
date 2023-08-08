import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
export const lsKey = "friendsProject";

export default function LoginForm() {
  const [data, setData] = useState({ username: "", password: "" });
  const history = useHistory();

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", data)
      .then((res) => localStorage.setItem(lsKey, res.data.token))
      .catch((err) => console.log(err));
    history.push("/friends");
  }
  return (
    <div className="login-form">
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          USERNAME
          <input
            name="username"
            onChange={handleChange}
            type="text"
            value={data.username}
          />
        </label>
        <label>
          {" "}
          password
          <input
            name="password"
            onChange={handleChange}
            type="password"
            value={data.password}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
