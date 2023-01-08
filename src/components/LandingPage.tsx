import { useSelector } from 'react-redux';
// import { useState } from 'react';
import Welcome from './Welcome';
import UserLogin from './UserLogin';
import { selectIsNewUser } from './userSlice';
import UserLandingPage from './UserLandingPage';
import ChatGPT from './AiComponent';
// import { FormSubmitButton } from './utils';

function contentToDisplay() {
  const isNewUser = useSelector(selectIsNewUser);
  // const [userPrompt, setUserPrompt] = useState('');
  // const [chatGptPrompt, setChatGptPrompt] = useState('give me a welcome greeting');

  // const handleChange = (e: any) => {
  //   setUserPrompt(e.target.value);
  // };

  // const updateEnteredPrompt = (e: ChangeEvent<HTMLInputElement>) => {
  //   setUserPrompt(e.target.value);
  // };

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
      <ChatGPT />
      {/* <input placeholder={userPrompt} onChange={(e: any) => handleChange(e)} /> */}
      {/* <FormSubmitButton onClickFunction={() => { setChatGptPrompt(userPrompt);
       }} buttonText="submit" /> */}
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
