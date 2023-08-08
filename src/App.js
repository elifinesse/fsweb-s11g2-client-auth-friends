import "./App.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

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
        <PrivateRoute path="/friends" component={FriendList} />
        <PrivateRoute path="/add" component={AddFriend} />
        {/* <Route path="/friends">
          <FriendList />
        </Route> */}
        {/* <Route path="/add">
          <AddFriend />
        </Route> */}
      </div>
    </div>
  );
}

export default App;
