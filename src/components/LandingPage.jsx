import Welcome from "./Welcome";
import UserLogin from "./UserLogin";
import UserProfileFetch from "./UserProfileFetch";

const LandingPage = () => {
  return (
    <div>
      <UserProfileFetch />
      <Welcome />
      <UserLogin />
    </div>
  );
};

export default LandingPage;
