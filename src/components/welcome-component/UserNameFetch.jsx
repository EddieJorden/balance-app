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
  console.log({ enteredEmail });
  const url = `http://localhost:8888/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;

  const dispatch = useDispatch();

  // fetch user name from user input, if name does not exist add name to server, create new user object
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log("data", data);
        dispatch(updateFetchedUserProfile(data));
        console.log("userProfile fetched and dispatched via updateuserprofile");
      });
  }, [enteredName, enteredEmail]);
};

export default UserNameFetch;
