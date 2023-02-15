import './App.css';
import { useSelector } from 'react-redux';
import UserLandingPage from './components/UserLandingPage';
import LoginScreen from './components/LoginScreen';
import { selectLoginStatus } from './components/userProfileSlice';
// import LandingPage from './components/LandingPage';

function App() {
  const isLoggedIn = useSelector(selectLoginStatus);

  return (
    <div className="App">
      <header className="App-header">
        <div />
        <div>
          {isLoggedIn ? (
            <UserLandingPage />
          ) : (
            <LoginScreen />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
