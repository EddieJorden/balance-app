import { useSelector } from 'react-redux';
import Welcome from './Welcome';

import UserLandingPage from './UserLandingPage';
import { selectLoginStatus } from './userProfileSlice';
import LoginScreen from './LoginScreen';

function contentToDisplay() {
  const isLoggedIn = useSelector(selectLoginStatus);

  if (isLoggedIn === true) {
    return (
      <div>
        <UserLandingPage />
      </div>
    );
  }
  return (
    <div>
      <div>
        <LoginScreen />
      </div>
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
