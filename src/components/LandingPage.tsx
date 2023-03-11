import { useSelector } from 'react-redux';
import Welcome from './Welcome';

import UserLandingPage from './UserLandingPage';
import { selectLoginStatus } from './userProfileSlice';
// import LoginScreen from './LoginScreen';
import TimeValueCalculator from './TimeValueCalculator';

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
      <div />
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
