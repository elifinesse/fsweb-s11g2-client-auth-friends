import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
export const lsKey = "friendsProject";

export default function AddFriend() {
  const [friend, setFriend] = useState({ name: "", email: "" });
  const history = useHistory();

  function handleChange(e) {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem(lsKey);
    const baseURL = "http://localhost:9000/api/friends";
    const api = axios.create({
      baseURL,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    api
      .post("http://localhost:9000/api/friends", friend)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    history.push({ pathname: "/friends", state: friend });
  }
  return (
    <div className="add-friend">
      <h1>add friend</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          friend name
          <input
            name="name"
            onChange={handleChange}
            type="text"
            value={friend.name}
          />
        </label>
        <label>
          {" "}
          email
          <input
            name="email"
            onChange={handleChange}
            type="email"
            value={friend.email}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
