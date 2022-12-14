import { ChangeEvent, useState } from 'react';
import { debounce } from 'lodash';

import { useDispatch } from 'react-redux';
import { FormSubmitButton, FormInput } from './utils';
import { updateUserName, updateUserEmail } from './userSlice';

function UserLogin() {
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email@mail.com');
  const [emailIsValid, setEmailIsValid] = useState(false);

  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const updateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (
      /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/i.test(
        val,
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
    const nameToSubmit = dataToUpdate.name;
    const emailToSubmit = dataToUpdate.email;

    if (nameToSubmit.length > 0 && emailToSubmit.length > 0) {
      dispatch(updateUserName(nameToSubmit));
      dispatch(updateUserEmail(emailToSubmit));
    } else {
      throw new Error('invalid name or email');
    }
  };

  const setEmailBorderColor = () => {
    const redBorder = '4px solid #E04643';
    const whiteBorder = '4px solid white';
    if (emailIsValid) {
      return whiteBorder;
    }
    return redBorder;
  };

  return (
    <div style={{ margin: '13px' }}>
      <div style={{ fontWeight: 'bold' }}>Login to start using our advanced AI powered CRM and time management tools! (coming soon)</div>
      <FormInput
        placeholder={name}
        changeHandler={debounce((e: ChangeEvent<HTMLInputElement>) => {
          updateName(e);
        }, 1000)}
      />
      <FormInput
        placeholder={email}
        changeHandler={debounce((e: ChangeEvent<HTMLInputElement>) => {
          updateEmail(e);
        }, 1000)}
        border={setEmailBorderColor()}
      />
      <div>
        {emailIsValid ? (
          <FormSubmitButton buttonText="Submit" onClickFunction={handleClick} />
        ) : (
          'please enter a valid user name and email'
        )}
      </div>
    </div>
  );
}

export default UserLogin;
