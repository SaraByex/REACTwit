import React from 'react';
import './App.css';
import Knowledge from './components/knowledge/Knowledge';

function App() {
  function displayAlert(cohortNumber) {
    alert("This is from App to User: " + cohortNumber);
  }

  return (
    <>
      <Knowledge
        name="Hyejin"
        email="jin@yahoo.com"
        age="7"
        message={displayAlert}
      />
    </>
  );
}

export default App;

//PROPS// props are objects and they hold values. they hold values passed into components


     

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

// export default App;
