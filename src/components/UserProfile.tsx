import { useSelector } from 'react-redux';
import {
  selectFetchedUserProfileEmail,
  selectFetchedUserProfileName,
} from './userSlice';
import StyledContainer from './ComponentContainer';

function UserProfile() {
  const userName = useSelector(selectFetchedUserProfileName);
  const userEmail = useSelector(selectFetchedUserProfileEmail);

  return (
    <div>
      <StyledContainer>
        <div>{userName || 'loading...'}</div>
        <div>{userEmail || 'loading...'}</div>
      </StyledContainer>
    </div>
  );
}

export default UserProfile;
