import { useSelector } from 'react-redux';
import { selectUserProfile } from './userProfileSlice';
import StyledContainer from './ComponentContainer';

function UserProfile() {
  const { username, email } = useSelector(selectUserProfile).user;

  return (
    <div>
      <StyledContainer>
        <div style={{ fontWeight: 'bold' }}>Profile</div>
        <br />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 'bold' }}>
            Name:
            <span style={{ fontWeight: 'normal' }}>
              {` ${username}` || 'loading...'}
            </span>
          </div>
          <div style={{ fontWeight: 'bold' }}>
            Email:
            <span style={{ fontWeight: 'normal' }}>{` ${email}` || 'loading...'}</span>
          </div>
          <div />
        </div>
      </StyledContainer>
    </div>
  );
}

export default UserProfile;
