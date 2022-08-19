import UserNameFetch from "./UserNameFetch";
import UserInput from "../welcome-component/UserInput";

import UserProfile from "./UserProfile";

const Welcome = () => {
  return (
    <div>
      <div>
        <UserNameFetch />
      </div>
      <div>
        <UserProfile />
      </div>
      <div>
        <UserInput />
      </div>
    </div>
  );
};

export default Welcome;
