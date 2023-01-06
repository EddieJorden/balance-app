import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { useState, ChangeEvent } from 'react';
import StyledContainer from './ComponentContainer';
import {
  selectUserTasks,
  selectFetchedUserProfileName,
  // selectFetchedUserProfileEmail,
  updateFetchedUserProfile,
  selectFetchedUserProfileEmail,
  // selectUserEmail,
} from './userSlice';
import { FormInput, FormSubmitButton, prefix } from './utils';

function UserTasks() {
  const [enteredTask, setEnteredTask] = useState('default task');
  console.log('enteredTask', enteredTask);
  const userName = useSelector(selectFetchedUserProfileName);
  console.log('userName', userName);
  const userEmail = useSelector(selectFetchedUserProfileEmail);
  console.log('userEmail', userEmail);

  const userTasks = useSelector(selectUserTasks);
  console.log('userTasks', userTasks);
  // setUserName(useSelector(selectFetchedUserProfileName));
  // setUserEmail(useSelector(selectFetchedUserProfileEmail));
  // const selectedUserName = useSelector(selectFetchedUserProfileName);
  // const selectedUserEmail = useSelector(selectFetchedUserProfileEmail);

  const dispatch = useDispatch();

  // const updateUserNameAndEmail = () => {
  //   setUserName(selectedUserName);
  //   setUserEmail(selectedUserEmail);
  // };

  const updateEnteredTask = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    // updateUserNameAndEmail();

    const url = `${prefix}/createNewTask?enteredProfileName=${userName}&enteredProfileEmail=${userEmail}&enteredTask=${enteredTask}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   enteredName: 'eddie',
      //   enteredEmail: 'eddie@mail.com',
      //   enteredTask: 'task from front end',
      // }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data from fetch', data);
        dispatch(updateFetchedUserProfile(data));
      })
      .catch((error) => console.error('error from fetch', error));
  };

  return (
    <StyledContainer>
      <div>User Task Component</div>
      <div>Enter a new task</div>
      <FormInput
        placeholder={enteredTask}
        changeHandler={debounce((e: ChangeEvent<HTMLInputElement>) => {
          updateEnteredTask(e);
        }, 1000)}
      />
      <FormSubmitButton buttonText="Submit" onClickFunction={handleClick} />
      <div>{userTasks}</div>
    </StyledContainer>
  );
}

export default UserTasks;
