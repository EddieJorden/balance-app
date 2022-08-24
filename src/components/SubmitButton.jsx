import { useDispatch } from "react-redux";
import { updateUserName, updateUserEmail } from "./userSlice";
import styled from "styled-components";

const ClickableButton = styled.div`
  margin: 15px;
  border-radius: 15px;
`;

const NotClickableButton = styled.div`
  margin: 15px;
  border-radius: 15px;
`;

const SubmitButton = (dataToUpdate, isDisabled) => {
  const dispatch = useDispatch();
  // const disabled = isDisabled.isDisabled

  const handleClick = () => {
    const nameToSubmit = dataToUpdate.dataToUpdate.name;
    const emailToSubmit = dataToUpdate.dataToUpdate.email;

    if (nameToSubmit.length > 0 && emailToSubmit.length > 0) {
      dispatch(updateUserName(nameToSubmit));
      dispatch(updateUserEmail(emailToSubmit));
    } else {
      console.log("ERROR: inavlid name or email entered");
    }
  };

  if (isDisabled) {
    return (
      <ClickableButton
        onClick={handleClick}
        style={{ color: "blue", backgroundColor: "white" }}
      >
        Submit
      </ClickableButton>
    );
  } else {
    return (
      <NotClickableButton style={{ color: "red" }}>Submit</NotClickableButton>
    );
  }
};

export default SubmitButton;
