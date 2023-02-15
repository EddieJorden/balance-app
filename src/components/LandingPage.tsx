import { useSelector } from 'react-redux';
import Welcome from './Welcome';
// import UserLogin from './UserLogin';

import UserLandingPage from './UserLandingPage';
// import ChatWindow from './AiComponent';
// import { missionStatement, prefix } from './utils';
import { selectLoginStatus, selectUserProfile } from './userProfileSlice';
import LoginScreen from './LoginScreen';

function contentToDisplay() {
  const isLoggedIn = useSelector(selectLoginStatus);
  const userProfile = useSelector(selectUserProfile);
  console.log('isLoggedIn', isLoggedIn);
  console.log('userProfile', userProfile);
  // const apiUrl = `${prefix}/fetch-chatgpt-response`;

  if (isLoggedIn === false) {
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
      {/* <div style={{ margin: '23px' }}>
        {missionStatement}
      </div>
      <ChatWindow apiUrl={apiUrl} />
      <div />
      <UserLogin /> */}
    </div>
  );
}

function LandingPage() {
  const isLoggedIn = useSelector(selectLoginStatus);
  const userProfile = useSelector(selectUserProfile);
  console.log('isLoggedIn', isLoggedIn);
  console.log('userProfile', userProfile);
  return (
    <div>
      <Welcome />
      {contentToDisplay()}
    </div>
  );
}

export default LandingPage;
