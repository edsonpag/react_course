import React, { useState } from 'react';
import './App.css';

import Form from './components/Form/Form';
import User from './components/User/User';

import getUserInformation from './API/getUserInformation';

function App() {

  const [ user, setUser ] = useState({
    display: false
  });

  async function addNewUser(username) {
    const newUser = await getUserInformation(username);

    setUser({
      display: true,
      ...newUser
    });
  }

  return (
    <div className="App">
      <Form addNewUser={addNewUser}/>
      { user.display && <User user={user} />}
    </div>
  );
}

export default App;
