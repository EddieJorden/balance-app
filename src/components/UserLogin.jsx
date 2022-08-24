import { useState } from "react";
import { debounce } from "lodash";

import SubmitButton from "./SubmitButton";

const UserLogin = () => {
  const [name, setName] = useState("user name");
  const [email, setEmail] = useState("mail@email.com");
  const [emailIsValid, setEmailIsValid] = useState(false);

  console.log({ name });
  console.log({ email });

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    let val = e.target.value;
    if (
      /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(
        val
      )
    ) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }

    setEmail(e.target.value);
  };

  const dataToUpdate = { name, email };

  const isButtonDisabled = false;

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
        {emailIsValid ? (
          <SubmitButton
            dataToUpdate={dataToUpdate}
            isDisabled={isButtonDisabled}
          />
        ) : (
          "please enter a valid email"
        )}
      </div>
    </div>
  );
};

export default UserLogin;
