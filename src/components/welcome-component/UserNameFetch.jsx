import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  updateFetchedUserProfile,
} from "../userSlice/userSlice";

const UserNameFetch = () => {
  const enteredName = useSelector(selectUserName);
  const enteredEmail = useSelector(selectUserEmail);
  const url = `http://localhost:8888/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        dispatch(updateFetchedUserProfile(data));
        console.log({ "fetched profile": data });
      });
  }, [enteredName, enteredEmail]);
};

export default UserNameFetch;
