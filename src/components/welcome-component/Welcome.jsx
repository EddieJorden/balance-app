import UserNameFetch from "./UserNameFetch";
import UserInput from "../welcome-component/UserInput";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
import {
  selectFetchedUserProfile,
  selectFetchedUserProfileStatus,
} from "../userSlice/userSlice";

const Welcome = () => {
  const profile = useSelector(selectFetchedUserProfile);
  const newUser = useSelector(selectFetchedUserProfileStatus);

  return (
    <div>
      <div>
        <UserNameFetch />
      </div>
      <div>
        {newUser === "existing user"
          ? `Welcome back ${profile.userName}`
          : "Welcome to Balance App"}
      </div>
      <div>
        <UserProfile />
      </div>
      <div>
        <UserInput />
      </div>
    </div>
  );
};

export default Welcome;
