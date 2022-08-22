import { useSelector } from "react-redux";
import {
  selectFetchedUserProfileEmail,
  selectFetchedUserProfileName,
} from "../userSlice/userSlice";
import StyledContainer from "../ComponentContainer";

const UserProfile = () => {
  const userName = useSelector(selectFetchedUserProfileName);
  const userEmail = useSelector(selectFetchedUserProfileEmail);

  return (
    <div>
      <StyledContainer>
        <div>{userName ? userName : "loading..."}</div>
        <div>{userEmail ? userEmail : "loading..."}</div>
      </StyledContainer>
    </div>
  );
};

export default UserProfile;
