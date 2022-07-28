import { useState } from 'react';
import './App.css';
import AddReminder from './components/AddReminder/AddReminder';
import Login from './components/Login/Login';

function App() {
  const [loggedInEmail, setLoggedInEmail] = useState(
    sessionStorage.getItem('email') || ''
  );
  return (
    <div className="App">
      {loggedInEmail ? (
        <AddReminder
          loggedInEmail={loggedInEmail}
          setLoggedInEmail={setLoggedInEmail}
        ></AddReminder>
      ) : (
        <Login setLoggedInEmail={setLoggedInEmail}></Login>
      )}
    </div>
  );
}

export default App;
