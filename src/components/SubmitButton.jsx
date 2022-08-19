import { useDispatch } from "react-redux";
import { updateUserName, updateUserEmail } from "./userSlice/userSlice";
import styled from "styled-components";

const StyledSubmitButton = styled.div`
  color: red;
  background-color: white;
  margin: 15px;
  border-radius: 15px;
`;

const SubmitButton = (dataToUpdate) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateUserName(dataToUpdate.dataToUpdate.name));
    dispatch(updateUserEmail(dataToUpdate.dataToUpdate.email));
  };

  return <StyledSubmitButton onClick={handleClick}>Submit</StyledSubmitButton>;
};

export default SubmitButton;
