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
        <div style={{ fontWeight: 'bold' }}>Profile</div>
        <br />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 'bold' }}>
            Name:
            <span style={{ fontWeight: 'normal' }}>
              {` ${userName}` || 'loading...'}
            </span>
          </div>
          <div style={{ fontWeight: 'bold' }}>
            Email:
            <span style={{ fontWeight: 'normal' }}>{` ${userEmail}` || 'loading...'}</span>
          </div>
          <div />
        </div>
      </StyledContainer>
    </div>
  );
}

export default UserProfile;
