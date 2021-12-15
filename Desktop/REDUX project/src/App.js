import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth.js";
import UserProfile from "./components/UserProfile.js";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <UserProfile />
      <Counter />
    </Fragment>
  );
}

export default App;
