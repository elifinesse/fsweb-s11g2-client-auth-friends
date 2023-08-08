import { useState } from "react";

export default function LoginForm() {
  const [data, setData] = useState({ username: "", password: "" });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
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
