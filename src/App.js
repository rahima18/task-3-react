import React from 'react';
import Profil from './Profil';

const App = () => {
  const user = {
    email: 'rahimamahmudzadeh@gmail.com',
    name: 'Mahmudzada Rahima',
    address: 'Baku',
    personalInfo: 'Student',
  };

  return (
    <div className="app-container">
      <Profil user={user}/>
    </div>
  );
};

export default App;