import React from 'react';
import './App.css';
import myImage from './grinch.png'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
     
<img src={myImage} alt="My Profile" className="profile-pic" />

        <p class="text"  >
        You can learn how to steal Christmas
        </p>
        <a
          className="App-link"
          href="https://www.imdb.com/title/tt0170016/"
          target="_blank"
          rel="noopener noreferrer"
        >
          see more 
        </a>
      </header>
    </div>
  );
}

export default App;
