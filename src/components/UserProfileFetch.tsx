import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserEmail,
  selectUserName,
  updateFetchedUserProfile,
} from './userSlice';

function UserProfileFetch() {
  const enteredName = useSelector(selectUserName);
  const enteredEmail = useSelector(selectUserEmail);
  // const localhost = `http://localhost:8888/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;
  const liveUrl = `https://eddiejorden-tech-balance-back-end-main-kposozymga-wm.a.run.app/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;
  const dispatch = useDispatch();
  fetch(liveUrl)
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
