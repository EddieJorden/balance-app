import AiComponent from './AiComponent';
import TaskList from './TaskList';
import TimeValueCalculator from './TimeValueCalculator';
import BalanceRating from './BalanceRating';

function UserLandingPage() {
  return (
    <div>
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
      <TaskList />
      <AiComponent />
    </div>
  );
}

export default UserLandingPage;
