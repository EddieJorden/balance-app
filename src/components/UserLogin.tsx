import { ChangeEvent, useState } from 'react';
import { debounce } from 'lodash';

import { FormSubmitButton, FormInput } from './utils';
import { useDispatch } from 'react-redux';
import { updateUserName, updateUserEmail } from './userSlice';
import UserProfileFetch from './UserProfileFetch';

const UserLogin = () => {
  const [name, setName] = useState('user name');
  const [email, setEmail] = useState('mail@email.com');
  const [emailIsValid, setEmailIsValid] = useState(false);

  console.log({ name });
  console.log({ email });

  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const updateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (
      /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(
        val
      )
    ) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
    setEmail(e.target.value);
  };

  const dataToUpdate = { name, email };

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('clicked');
    const nameToSubmit = dataToUpdate.name;
    const emailToSubmit = dataToUpdate.email;

    if (nameToSubmit.length > 0 && emailToSubmit.length > 0) {
      dispatch(updateUserName(nameToSubmit));
      dispatch(updateUserEmail(emailToSubmit));
    } else {
      console.log('ERROR: inavlid name or email entered');
    }
  };

  const setEmailBorderColor = () => {
    const border = '4px solid #E04643';
    if (!emailIsValid) {
      return border;
    }
  };

  return (
    <div style={{ margin: '13px' }}>
      {/* <UserProfileFetch /> */}
      <FormInput
        placeholder={name}
        changeHandler={debounce((e: ChangeEvent<HTMLInputElement>) => {
          updateName(e);
        }, 1000)}></FormInput>
      <FormInput
        placeholder={email}
        changeHandler={debounce((e: ChangeEvent<HTMLInputElement>) => {
          updateEmail(e);
        }, 1000)}
        border={setEmailBorderColor()}></FormInput>
      <div>
        {emailIsValid ? (
          <FormSubmitButton buttonText="Submit" onClickFunction={handleClick} />
        ) : (
          'please enter a valid user name and email'
        )}
      </div>
    </div>
  );
};

export default UserLogin;
