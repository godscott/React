import React, { Component } from 'react'; //副檔名.js可以不用寫出來
// import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';
import Counter from './components/Counter';
import Banner from './components/Banner';
import "./components/Person.css"

class App extends Component {
  //改title
  titleChangeListener = event => {
    this.setState({title: event.target.value})
  }
  state = {
    persons: [
      { name: "Mark", age: 43 },
      { name: "James", age: 38 },
      { name: "Tim", age: 33 },
      { name: "Mary", age: 28 },
      { name: "abby", age: 34 },
      { name: "Kevin", age: 50 }
    ],
    title:"Hello React chtti302",
    showPersons: false
  }

  // changeNameHandler = () => {
  //   console.log("change button clicked")
  //   this.setState({
  //     persons: [{ name: "X man", age: 45 },
  //     { name: "Captain America", age: 35 },
  //     { name: "Iron man", age: 42 },
  //     { name: "Thor", age: 200 },
  //     { name: "Groot", age: 5 },
  //     { name: "Hawk", age: 40 }
  //     ]
  //   })
  // }

  changeNameHandler = (leaderName) => {
    console.log("change button clicked")
    this.setState({
      persons: [
        { name: leaderName, age: 45 },
        { name: "Captain America", age: 35 },
        { name: "Iron man", age: 42 },
        { name: "Thor", age: 200 },
        { name: "Groot", age: 5 },
        { name: "Hawk", age: 40 }
      ]
    })
  }

  //開關內文，切記勿直接使用this.state.showPersons，要用this.setState的方式
  toggleDisplayHandler = () => {
      this.setState({showPersons: !this.state.showPersons}, () => {
        console.log(`current status = ${this.state.showPersons}`)
      })
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    const style = {
      background: "yellow",
      font: "inherit",
      border: "2px solid red",
      padding: "4px",
      cursor: 'pointer'
    }

    // let persons = null;
    // if( this.state.showPersons===true ) {
    //   persons = (<div>
    //     <Person
    //       clickCallback={this.changeNameHandler.bind(this,"Peter Pan")}
    //       name={this.state.persons[0].name}
    //       age={this.state.persons[0].age} />
    //     <Pet name="king" species="cat" />
    //     <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
    //     <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >Team Leader</Person>
    //     <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
    //     <Person name={this.state.persons[4].name} age={this.state.persons[4].age} />
    //     <Person name={this.state.persons[5].name} age={this.state.persons[5].age} />
    //     <Pet />
    //   </div>)
    // }

    let persons = null;
    if (this.state.showPersons === true) {
      persons = (<div>{
        this.state.persons.map((person, index) => {
          return <Person 
          key={index}
          clickCallback = {() => this.deletePersonHandler(index)}
          name={person.name} age={person.age} />
        })
      }</div>)
    }

    return (
      <div className="App">
        <Counter step="2" />
        <h1>{this.state.title}</h1>
        <Banner clickCallback = {this.titleChangeListener} name={this.state.title} />
        {
          // comment inside JSX
        }
        <Dashboard1 />
        <Dashboard2 />
        {
          // <button onClick={this.changeNameHandler}>Change</button>
          // <Person 
          // clickCallback = {this.changeNameHandler}
          // name={this.state.persons[0].name} 
          // age={this.state.persons[0].age} />
        }
        {
          // <button onClick={this.changeNameHandler.bind(this, "One Punch Man")}>Change</button>
        }
        <button style={style} onClick={() => this.toggleDisplayHandler()}>show hide persons</button>
        <button style={style} onClick={() => this.changeNameHandler("One Punch Man")}>Change</button>
        {persons}
        {
          // this.state.showPersons === true ?
          // <div>
          //   <Person
          //     clickCallback={this.changeNameHandler.bind(this,"Peter Pan")}
          //     name={this.state.persons[0].name}
          //     age={this.state.persons[0].age} />
          //   <Pet name="king" species="cat" />
          //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >Team Leader</Person>
          //   <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
          //   <Person name={this.state.persons[4].name} age={this.state.persons[4].age} />
          //   <Person name={this.state.persons[5].name} age={this.state.persons[5].age} />
          //   <Pet />
          // </div>
          // :null
        }
      </div>
    );
  }
}

// function App() {
//   return ( //回傳只能有一個物件，如只有一個root的概念
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>

//     // <div className="App">
//     //   <h1>Hello world</h1>
//     //   <h2>React Programming</h2>
//     // </div>

//     // React.createElement('div', null, <h1>Hello world</h1>) //OK
//     // React.createElement('div', null, <h1>Hello world</h1><h2>React Programming</h2>) //error
//     // React.createElement('div', {className:'App'}, //置中
//     //     React.createElement('h1', null, "Hello world"),
//     //     React.createElement('h2', null, "React Programming"),
//     //     React.createElement('h3', null, '2020-Aug-18')) //新增多個元件的方式

//     <div className="App">
//       <Counter step="2"/>
//       <Dashboard1/>
//       <Dashboard2/>
//       <Person name="Mark" age="43"/>
//       <Pet name="king" species="cat" />
//       <Person name="James" age="38">Team Leader</Person> 
//       <Person name="Tim" age="33"/>
//       <Person name="Mary" age="28"/>
//       <Person name="Abby" age="34"/>
//       <Pet />
//     </div>
//   );
// }

export default App;
