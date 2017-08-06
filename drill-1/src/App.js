import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGuest, removeGuest } from './ducks/guestList';
import EditGuest from './components/EditGuest/EditGuest'
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      text: '',
      edit: false,
      guestToEdit: '',
      guestIndex: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editName = this.editName.bind(this);
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

  editName(guest, i) {
    this.setState({
      edit: true,
      guestToEdit: guest,
      guestIndex: i
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
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map((guest, i) => (
            <div key={i} className="list-item">
              <li>{guest}</li>
              <div>
                <button onClick={() => this.editName(guest, i)}>Edit</button>
                <button onClick={() => this.props.removeGuest(i)}>Remove</button>
              </div>
            </div>
          ))}
        </ul>
        <form className="add-guest" onSubmit={this.handleSubmit}>
          Add guest: <input onChange={this.handleInputChange} value={this.state.text}/>
          <button>Add</button>
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
