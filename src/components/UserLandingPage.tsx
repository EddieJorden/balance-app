import UserFinances from './UserFinances';
import UserProfile from './UserProfile';

function UserLandingPage() {
  return (
    <div>
      <UserProfile />
      <UserFinances />
    </div>
  );
}

export default UserLandingPage;
