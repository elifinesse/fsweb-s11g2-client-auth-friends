import axios from "axios";
import { useState } from "react";
import { lsKey } from "./LoginForm";

export default function FriendList() {
  const [friends, setFriends] = useState([]);
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
    .get(baseURL)
    .then((res) => setFriends(res.data))
    .catch((err) => console.log(err));

  return (
    <div>
      <h1>friends list</h1>
      {friends.map((friend) => (
        <p key={friend.id}>
          {friend.name} - {friend.email}
        </p>
      ))}
    </div>
  );
}
