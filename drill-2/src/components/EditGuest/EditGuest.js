import React, { Component } from 'react';
import './EditGuest.css';
import {connect} from 'react-redux';
import { editGuest } from '../../ducks/guestList';

class EditGuest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  update(guestIndex, text) {
    this.props.editGuest(guestIndex, text);
    this.setState({
      text: ''
    })
    this.props.hide();
  }



  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <input className="modal-input" onChange={this.handleInputChange} value={this.state.text}/>
          <button type="" className="modal-btn" onClick={() => this.update(this.props.guestIndex, this.state.text)}>Update</button>
          <button type="" className="modal-btn" onClick={() => this.props.hide()}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { editGuest })(EditGuest)
