import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  updateFetchedUserProfile,
} from "./userSlice";

const UserProfileFetch = () => {
  const enteredName = useSelector(selectUserName);
  const enteredEmail = useSelector(selectUserEmail);
  const localhost = `http://localhost:8888/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;
  // const liveUrl = `https://eddiejorden-tech-balance-back-end-main-kposozymga-wm.a.run.app/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(localhost)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        dispatch(updateFetchedUserProfile(data));
        console.log(`fetched profile":`, { [data.userName]: data });
      });
  }, [enteredName, enteredEmail]);
};

export default UserProfileFetch;
