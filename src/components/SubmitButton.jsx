import { useDispatch } from "react-redux";
import { updateUserProfile } from "./userSlice/userSlice";
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
    dispatch(updateUserProfile(dataToUpdate.dataToUpdate));
    console.log("dataToUpdate", dataToUpdate.dataToUpdate);
  };

  return <StyledSubmitButton onClick={handleClick}>Submit</StyledSubmitButton>;
};

export default SubmitButton;
