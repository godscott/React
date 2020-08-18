import React from 'react'; //副檔名.js可以不用寫出來
// import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';

function App() {
  return ( //回傳只能有一個物件，如只有一個root的概念
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

    // <div className="App">
    //   <h1>Hello world</h1>
    //   <h2>React Programming</h2>
    // </div>

    // React.createElement('div', null, <h1>Hello world</h1>) //OK
    // React.createElement('div', null, <h1>Hello world</h1><h2>React Programming</h2>) //error
    // React.createElement('div', {className:'App'}, //置中
    //     React.createElement('h1', null, "Hello world"),
    //     React.createElement('h2', null, "React Programming"),
    //     React.createElement('h3', null, '2020-Aug-18')) //新增多個元件的方式

    <div className="App">
      <Dashboard1/>
      <Dashboard2/>
      <Person name="Mark" age="43"/>
      <Pet name="king" species="cat" />
      <Person name="James" age="38">Team Leader</Person> 
      <Person name="Tim" age="33"/>
      <Person name="Mary" age="28"/>
      <Person name="Abby" age="34"/>
      <Pet />
    </div>
  );
}

export default App;
