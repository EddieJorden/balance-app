import { useSelector } from 'react-redux';
import Welcome from './Welcome';
import UserLogin from './UserLogin';
import { selectIsNewUser } from './userSlice';
import UserLandingPage from './UserLandingPage';
import ChatWindow from './AiComponent';
import { prefix } from './utils';

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
        Our mission at Balance App is to ignite a revolution in
        the way we live, work, and relate to the world around us. We
        believe that it is time to draw a line in the sand and say
        enough is enough - we will not accept a society that values
        money and overwork above all else, and that destroys the
        well-being and happiness of individuals, families, and
        communities. We are here to offer a powerful and intuitive
        interface that helps people manage their tasks, schedule,
        and time more effectively, and to reclaim the balance,
        joy, and purpose that have been lost in the pursuit of
        profit. Join us, and let&apos;s build a better world together.
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
