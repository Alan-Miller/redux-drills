import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGuest, removeGuest } from './ducks/guestList';
import EditGuest from './components/EditGuest/EditGuest';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      text: '',
      edit: false,
      // guestToEdit: '',
      guestIndex: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addGuest(this.state.text)
    this.setState({
      text: ''
    })
  }
  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  editName(index) {
    this.setState({
      edit: true,
      guestIndex: index
    })
  }
  hideModal() {
    this.setState({
      edit: false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map((guest, i) => (
            <div key={i} className="list-item">
              <li>{guest}</li>
              <div>
                <button type="" onClick={() => this.editName(i)}>Edit</button>
                <button type="" onClick={() => this.props.removeGuest(i)}>Remove</button>
              </div>
            </div>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <div className="add-guest">
            Add guest: <input type="" onChange={this.handleInputChange} value={this.state.text}/>
            <button type="">Add</button>
          </div>
        </form>
        {
          this.state.edit
          ?
          <EditGuest guestToEdit={this.state.guestToEdit} guestIndex={this.state.guestIndex} hide={this.hideModal}/>
          :
          null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  }
}

export default connect(mapStateToProps, { addGuest, removeGuest })(App);
