import { useEffect, useState } from "react";

const UserNameFetch = () => {
  const queryParams = "Benny";
  const url = `http://localhost:8888/getusername?enteredName=${queryParams}`;
  const [name, setName] = useState("default name in state");
  console.log("name in state", name);

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
        setName(data.userName);
        console.log(name);
      });
  }, []);

  return <div>{name}</div>;
};

export default UserNameFetch;
