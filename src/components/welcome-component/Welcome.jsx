import UserNameFetch from "./UserNameFetch";
import UserInput from "../welcome-component/UserInput";
import UserProfile from "./UserProfile";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFetchedUserProfile,
  isNewUser,
  updateNewUserStatus,
} from "../userSlice/userSlice";

const Welcome = () => {
  const profile = useSelector(selectFetchedUserProfile);
  const newUser = useSelector(isNewUser);
  const dispatch = useDispatch();
  console.log({ profile });
  if (profile.userName === "user name") {
    console.log({ "new user": profile.userName });
    dispatch(updateNewUserStatus(true));
  } else {
    console.log({ welcomeBack: profile.userName });
    dispatch(updateNewUserStatus(false));
  }

  return (
    <div>
      <div>
        <UserNameFetch />
      </div>
      <div>
        {newUser
          ? "Welcome to Balance App"
          : `Welcome back ${profile.userName}`}
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
