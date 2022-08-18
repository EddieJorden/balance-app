import { useState } from "react";
import { debounce } from "lodash";

import SubmitButton from "../SubmitButton";

const UserInput = () => {
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("email");
  console.log({ name: name, email: email });

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const dataToUpdate = name;

  return (
    <div>
      <input
        type="text"
        placeholder={name}
        onChange={debounce((e) => {
          updateName(e);
        }, 1000)}
      />
      <input
        type="text"
        placeholder={email}
        onChange={debounce((e) => {
          updateEmail(e);
        }, 1000)}
      />
      <div>
        <SubmitButton dataToUpdate={dataToUpdate} />
      </div>
    </div>
  );
};

export default UserInput;
