import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from "../userSlice/userSlice";
import { updateUserName } from "../userSlice/userSlice";

const UserNameFetch = () => {
  const userName = useSelector(selectUserName);
  console.log("userName in usernamefetch", userName);
  const queryParams = userName;
  const url = `http://localhost:8888/getusername?enteredName=${queryParams}`;

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

        dispatch(updateUserName(data.userName));
        console.log(name);
      });
  }, [userName]);

  return <div>{name}</div>;
};

export default UserNameFetch;
