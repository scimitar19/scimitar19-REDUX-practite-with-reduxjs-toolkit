import classes from "./UserProfile.module.css";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const toggleUserProfile = useSelector(
    (state) => state.authentication.userAuth
  );

  return (
    toggleUserProfile && (
      <main className={classes.profile}>
        <h2>My User Profile</h2>
      </main>
    )
  );
};

export default UserProfile;
