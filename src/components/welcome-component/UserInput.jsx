import { useState } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { updateUserName } from "../userSlice/userSlice";

const UserInput = () => {
  const [name, setName] = useState("user name");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
    dispatch(updateUserName(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder={name}
        onChange={debounce((e) => {
          handleChange(e);
        }, 1000)}
      />
    </div>
  );
};

export default UserInput;
