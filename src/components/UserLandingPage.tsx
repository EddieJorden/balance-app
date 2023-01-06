import UserFinances from './UserFinances';
import UserProfile from './UserProfile';
import UserTasks from './UserTasks';

function UserLandingPage() {
  return (
    <div>
      <UserProfile />
      <UserFinances />
      <UserTasks />
    </div>
  );
}

export default UserLandingPage;
