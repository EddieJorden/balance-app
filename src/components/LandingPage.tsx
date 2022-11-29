import { useSelector } from 'react-redux';
import Welcome from './Welcome';
import UserLogin from './UserLogin';
import { selectIsNewUser } from './userSlice';
import UserLandingPage from './UserLandingPage';

function contentToDisplay() {
  const isNewUser = useSelector(selectIsNewUser);

  if (isNewUser === false) {
    return (
      <div>
        <UserLandingPage />
      </div>
    );
  }
  return (
    <div>
      <UserLogin />
    </div>
  );
}

function LandingPage() {
  return (
    <div>
      <Welcome />
      {contentToDisplay()}
    </div>
  );
}

export default LandingPage;
