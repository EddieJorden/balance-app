import { useState } from "react";
import { debounce } from "lodash";

import SubmitButton from "../SubmitButton";

const UserInput = () => {
  const [name, setName] = useState("user name");

  const handleChange = (e) => {
    setName(e.target.value);
    // dispatch(updateUserName(e.target.value));
  };

  const dataToUpdate = name;

  return (
    <div>
      <input
        type="text"
        placeholder={name}
        onChange={debounce((e) => {
          handleChange(e);
        }, 1000)}
      />
      <div>
        <SubmitButton dataToUpdate={dataToUpdate} />
      </div>
    </div>
  );
};

export default UserInput;
