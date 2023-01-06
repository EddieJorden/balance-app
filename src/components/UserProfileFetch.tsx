import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserEmail,
  selectUserName,
  updateFetchedUserProfile,
} from './userSlice';
import { prefix } from './utils';

function UserProfileFetch() {
  const enteredName = useSelector(selectUserName);
  const enteredEmail = useSelector(selectUserEmail);
  const url = `${prefix}/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;
  // eslint-disable-next-line max-len
  // const local = `${localUrl}/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;
  const dispatch = useDispatch();
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      dispatch(updateFetchedUserProfile(data));
    });
  return <div />;
}

export default UserProfileFetch;
