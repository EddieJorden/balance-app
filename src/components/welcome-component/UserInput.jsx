import { useState } from "react";
import { debounce } from "lodash";

import SubmitButton from "../SubmitButton";

const UserInput = () => {
  const [name, setName] = useState("user name");
  const [email, setEmail] = useState("mail@email.com");
  const [emailIsValid] = useState(true);

  console.log({ name });
  console.log({ email });

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const dataToUpdate = { name, email };

  return (
    <div>
      <input
        type="text"
        placeholder={name}
        onChange={debounce((e) => {
          updateName(e);
        }, 1000)}
      />
      <div>{!emailIsValid ? "invalid email" : ""}</div>
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
