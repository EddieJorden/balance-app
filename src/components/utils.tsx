import styled from 'styled-components';
import PropTypes from 'prop-types';

// live url
export const prefix = 'https://eddiejorden-tech-balance-back-end-main-kposozymga-wm.a.run.app';

// local url
// export const prefix = 'http://localhost:8888';

// Form submit button
const StyledFormSubmitButton = styled.div`
  background-color: white;
  color: blue;
  border-radius: 3px;
  margin: 13px;
  padding: 3px;
  cursor: pointer;
`;

interface FormSubmitButtonProps {
  onClickFunction: () => any;
  buttonText: string;
  //   setter: Function;
  //   getter: string;
}

export function FormSubmitButton({
  onClickFunction,
  buttonText,
}: FormSubmitButtonProps): JSX.Element {
  return (
    <StyledFormSubmitButton onClick={onClickFunction}>
      {buttonText}
    </StyledFormSubmitButton>
  );
}

FormSubmitButton.defaultProps = {
  buttonText: 'click',
  onClickFunction: () => {},
};

FormSubmitButton.propTypes = {
  buttonText: PropTypes.string,
  onClickFunction: PropTypes.func,
};

// Form input
interface FormInputProps {
  placeholder: string;
  changeHandler: () => {};
  border: string;
}

export function FormInput({
  placeholder,
  changeHandler,
  border,
}: FormInputProps): JSX.Element {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={changeHandler}
        style={{
          border,
          borderRadius: '3px',
          margin: '6px',
          cursor: 'pointer',
          height: '33px',
          width: '260px',
          fontSize: '18px',
        }}
      />
    </div>
  );
}

FormInput.defaultProps = {
  placeholder: 'default value',
  changeHandler: () => {},
  border: 'none',
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func,
  border: PropTypes.string,
};
