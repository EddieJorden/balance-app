import { useSelector } from "react-redux";
import {
  selectFetchedUserProfile,
  selectFetchedUserProfileStatus,
} from "./userSlice";

const Welcome = () => {
  const profile = useSelector(selectFetchedUserProfile);
  const newUser = useSelector(selectFetchedUserProfileStatus);

  return (
    <div>
      <h1>
        {newUser === "existing user"
          ? `Welcome back ${profile.userName}`
          : "Welcome to Balance App"}
      </h1>
    </div>
  );
};

export default Welcome;
