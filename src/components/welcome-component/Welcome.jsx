import UserNameFetch from "./UserNameFetch";
import UserInput from "../welcome-component/UserInput";
import StyledContainer from "../ComponentContainer";

const Welcome = () => {
  return (
    <div>
      <StyledContainer>
        Welcome
        <div>
          <UserNameFetch />
        </div>
        <div>
          <UserInput />
        </div>
      </StyledContainer>
    </div>
  );
};

export default Welcome;
