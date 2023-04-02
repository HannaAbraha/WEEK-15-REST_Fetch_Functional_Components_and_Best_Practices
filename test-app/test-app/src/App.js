import React from 'react';
import logo from './logo.svg';
import './App.css';
import Payroll from './payroll';

const PAYROLL_ENDPOINT = 'https://640a0f10d16b1f3ed6e55258.mockapi.io/payroll';

export default class App extends React.Component {
  constructor(props) {
    console.log = (props);
    super(props);
    this.addNewPosition = this.addNewPosition.bind(this);
    this.deletePosition = this.deletePosition.bind(this);
  }

  render() {
    const Payroll = this.state
      ? this.state.payroll.map((payroll, index) =>
        <payroll
         key={index}
         data={payroll}
         addNewPosition={this.addNewPosition}
         deletePosition={this.deletePosition} />)
      : null;
      return (
        <div>
          {Payroll}
        </div>
      );
 }
 //this is to do http request
  componentDidMount() {
    fetch(PAYROLL_ENDPOINT)
      .then(res =>res.json())
      .then(data => {
        this.setState({
          payroll: data
        });
      });
  }
 //This will delete the position we don't need from the payroll
  deletePosition(e, payroll, position) {
    const index = payroll.positions.indexOf(position);
    payroll.positions.splice(index, 1);
    updatePayroll(payroll)
      .then(() => {
        this.setState(state => {
          for (let p of state.payroll) {
            if (p._id === payroll._id) {
              let p = payroll;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }
 //This is to add a position in the payroll
  addPosition(e, payroll, position) {
    payroll.positions.push(position)
    updatePayroll(payroll)
      .then(() => {
        this.setState(state => {
          for (let p of state.payroll) {
            if (p._id === payroll._id) {
              let p = payroll;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }
}
 //This is to update the payroll
function updatePayroll(payroll) {
  return fetch(`${PAYROLL_ENDPOINT}/${payroll._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payroll)
  });




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
 } 


