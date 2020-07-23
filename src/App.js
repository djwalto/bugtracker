import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUG TRACKER PROJECT
        </a>
      </header>

      <div className="container">
        <h1>JS Issue Tracker</h1> <h5>from Walton.AI</h5>
        <div className="jumbotron">
          <h3>Submit New Ticket</h3>
          <form id="issueInputForm">
            <div className="form-group">
              <label name="issueDescInput">Description</label>
              <input
                type="text"
                className="form-control"
                id="issueDescInput"
                placeholder="Describe the issue..."
              />
            </div>
            <div className="form-group">
              <label>Severity</label>
              <select className="form-control" id="issueSeverityInput">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="form-group">
              <label name="issueAssignedToInput">Assigned To</label>
              <input
                type="text"
                className="form-control"
                id="issueAssignedToInput"
                placeholder="Enter responsible..."
              />
            </div>
            <Button type="submit" className="btn btn-primary">
              Add Ticket
            </Button>
          </form>
        </div>
        <div className="col-lg-12">
          <div id="issuesList"></div>
        </div>
        <div className="footer">
          <p>Copyright &copy; 2020 Walton.AI</p>
        </div>
      </div>
    </div>
  );
}

export default App;
