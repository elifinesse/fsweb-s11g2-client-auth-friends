import "./App.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <header>
        <h1>FRIENDS DATABASE</h1>
        <Navigation />
      </header>

      <LoginForm />
    </div>
  );
}

export default App;
