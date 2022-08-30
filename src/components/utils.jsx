import styled from "styled-components";
import PropTypes from "prop-types";

//Form submit button
const StyledFormSubmitButton = styled.div`
  background-color: white;
  color: blue;
  border-radius: 3px;
  margin: 13px;
  padding: 3px;
  cursor: pointer;
`;
export const FormSubmitButton = ({ onClickFunction, buttonText }) => {
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

//Form input

export const FormInput = ({ placeholder, changeHandler, border }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={changeHandler}
      style={{
        border: border,
        borderRadius: "3px",
        margin: "6px",
        cursor: "pointer",
        height: "33px",
        width: "260px",
        fontSize: "18px",
      }}
    ></input>
  );
};

FormInput.defaultProps = {
  placeholder: "default value",
  changeHandler: () => {
    console.log("clicked");
  },
  border: "none",
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func,
  border: PropTypes.string,
};
