import AiComponent from './AiComponent';
import TaskList from './TaskList';
import TimeValueCalculator from './TimeValueCalculator';
import BalanceRating from './BalanceRating';

function UserLandingPage() {
  return (
    <div>
      <TaskList />
      <AiComponent />
      <h1 style={{ color: 'red' }}>currently in development</h1>
      <p>these components are currently being worked on and will be available soon</p>
      <TimeValueCalculator
        averageTimeInYears={75}
        hoursSpentWorking={8}
        hoursSpentOnNecessities={10}
        freeTimePerDay={6}
        compensationPerHour={25}
        essentialExpensesPerMonth={1000}
        nonEssentialExpensesPerMonth={500}
      />
      <BalanceRating />
    </div>
  );
}

export default UserLandingPage;
