import "./App.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>FRIENDS DATABASE</h1>
        <Navigation />
      </header>

      <div className="content">
        <Route exact path="/">
          <LoginForm />
        </Route>

        <Route path="/friends">
          <FriendList />
        </Route>
        <Route path="/add">
          <AddFriend />
        </Route>
      </div>
    </div>
  );
}

export default App;
