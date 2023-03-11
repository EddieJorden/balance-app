import './App.css';
// import { useSelector } from 'react-redux';
// import UserLandingPage from './components/UserLandingPage';
// import LoginScreen from './components/LoginScreen';
// import { selectLoginStatus } from './components/userProfileSlice';
import TimeValueCalculator from './components/TimeValueCalculator';
// import LandingPage from './components/LandingPage';

function App() {
  // const isLoggedIn = useSelector(selectLoginStatus);

  return (
    <div className="App">
      <header className="App-header">
        <div />
        <TimeValueCalculator
          averageTimeInYears={75}
          hoursSpentWorking={8}
          hoursSpentOnNecessities={10}
          freeTimePerDay={6}
          compensationPerHour={25}
          essentialExpensesPerMonth={1000}
          nonEssentialExpensesPerMonth={500}
        />

        {/* <div>
          {isLoggedIn ? (
            <UserLandingPage />
          ) : (
            <LoginScreen />
          )}
        </div> */}
      </header>
    </div>
  );
}

export default App;
