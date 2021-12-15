import classes from "./Header.module.css";
// import { authenticationSlice } from "../store/index.js";
import { useSelector, useDispatch } from "react-redux";
import { authenticateSlice } from "../store/index.js";

const Header = () => {
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.authentication.userAuth);
  console.log(useSelector((state) => state.authentication.userAuth));

  const logOutHandler = (event) => {
    event.preventDefault();
    dispatch(authenticateSlice.actions.isLoggedOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>{authentication && <a href="/">My Products</a>}</li>
          <li>{authentication && <a href="/">My Sales</a>}</li>
          <li>
            {authentication && <button onClick={logOutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
