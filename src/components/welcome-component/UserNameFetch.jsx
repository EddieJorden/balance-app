import { useEffect, useState } from "react";

const UserNameFetch = () => {
  const queryParams = "ben german";
  const url = `http://localhost:8888/getusername?enteredName=${queryParams}`;
  const [name, setName] = useState("default name in state");
  console.log(name);

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
        setName(data.userName);
      })
      .then((error) => {
        console.error("error fetching data ", error);
      });
  }, []);

  return <div>{name}</div>;
};

export default UserNameFetch;
