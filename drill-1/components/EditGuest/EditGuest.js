import React, { Component } from 'react';
import './EditGuest.css';
import { editGuest } from '../../ducks/guestList';
import { connect } from 'react-redux';

class EditGuest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.guest
    }

    this.update = this.update.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  update(updatedGuest, index) {
    console.log('props from App: ', this.props.guestToEdit, this.props.guestIndex);
    this.props.editGuest(updatedGuest, index)
    this.props.hide();
  }



  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <input
            className="modal-input"
            value={this.state.text}
            onChange={this.handleInputChange} />
          <button
            type=""
            onClick={this.update}
            className="modal-btn">Update</button>
          <button
            onClick={this.props.hide}
            type=""
            className="modal-btn">Cancel</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, { editGuest })(EditGuest);
