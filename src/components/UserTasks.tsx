import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { useState, ChangeEvent } from 'react';
import StyledContainer from './ComponentContainer';
import Task from './TaskComponent';
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
  const userName = useSelector(selectFetchedUserProfileName);
  const userEmail = useSelector(selectFetchedUserProfileEmail);
  const userTasks = useSelector(selectUserTasks);
  const dispatch = useDispatch();
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
    })
      .then((response) => response.json())
      .then((data) => {
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
      <Task task="test task" />
    </StyledContainer>
  );
}

export default UserTasks;
