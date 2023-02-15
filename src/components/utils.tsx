import styled from 'styled-components';
import PropTypes from 'prop-types';

// live url
export const prefix = 'https://eddiejorden-tech-balance-back-end-main-kposozymga-wm.a.run.app';

// local url
// export const prefix = 'http://localhost:8888';

// export const missionStatement = 'Behold this mission that Balance App has set out:
// To ignite a revolution that will bring about a transformation of how we live, work, and
// relate to the world around us. This revolution will draw a line in the sand and
// proclaim: No more should money and overwork be valued above all else; no more should our
// well-being and happiness be sacrificed in the name of profit. To aid in these pursuits,
// Balance App offers an intuitive user interface to help people better manage their tasks,
// schedule, and time. Together, let us harmonize our lives and reclaim joy, balance, and purpose.';

export const missionStatement = `Our mission at Balance App is to ignite a revolution in
the way we live, work, and relate to the world around us. We
believe that it is time to draw a line in the sand and say
enough is enough - we will not accept a society that values
money and overwork above all else, and that destroys the
well-being and happiness of individuals, families, and
communities. We are here to offer a powerful and intuitive
interface that helps people manage their tasks, schedule,
and time more effectively, and to reclaim the balance,
joy, and purpose that have been lost in the pursuit of
profit. Join us, and let&apos;s build a better world together.`;

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
