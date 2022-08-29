import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFormSubmitButton = styled.div`
  background-color: white;
  color: blue;
  border-radius: 3px;
  margin: 13px;
  padding: 3px;
`;
const FormSubmitButton = ({ onClickFunction, buttonText }) => {
  return (
    <StyledFormSubmitButton onClick={onClickFunction}>
      {buttonText}
    </StyledFormSubmitButton>
  );
};

FormSubmitButton.defaultProps = {
  buttonText: "click",
  onClickFunction: () => {
    console.log("clicked");
  },
};

FormSubmitButton.propTypes = {
  buttonText: PropTypes.string,
  onClickFunction: PropTypes.func,
};

export default FormSubmitButton;
