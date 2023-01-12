import { useSelector } from 'react-redux';
import Welcome from './Welcome';
import UserLogin from './UserLogin';
import { selectIsNewUser } from './userSlice';
import UserLandingPage from './UserLandingPage';
import ChatWindow from './AiComponent';
import { missionStatement, prefix } from './utils';

function contentToDisplay() {
  const isNewUser = useSelector(selectIsNewUser);
  const apiUrl = `${prefix}/fetch-chatgpt-response`;

  if (isNewUser === false) {
    return (
      <div>
        <UserLandingPage />
      </div>
    );
  }
  return (
    <div>
      <div style={{ margin: '23px' }}>
        {missionStatement}
      </div>
      <ChatWindow apiUrl={apiUrl} />
      <div />
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
