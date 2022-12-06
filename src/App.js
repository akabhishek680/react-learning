import './App.css';
import UserDetails from './UserDetails';

function App() {
  const myName = 'abhishek';
  const myCondition = true;

  return (
    <div className="App">
      <h2>inside app </h2>
      <UserDetails />
    </div>
  );
}

export default App;
