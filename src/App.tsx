import './App.css';
import LandingPage from './components/LandingPage';
import UserProfileFetch from './components/UserProfileFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />
        <UserProfileFetch />
      </header>
    </div>
  );
}

export default App;
