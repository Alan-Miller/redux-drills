import React, { Component } from 'react';
import './EditGuest.css';
import { editGuest } from '../../ducks/guestList';
import { connect } from 'react-redux';

class EditGuest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
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
    console.log('EditGuest\'s props from parent App: ', this.props.guestToEdit, this.props.guestIndex);
    this.props.editGuest(updatedGuest, index)
    this.setState({
      text: ''
    })
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
            onClick={() => this.update(this.state.text, this.props.guestIndex)}
            className="modal-btn">Update</button>
          <button
            onClick={() => this.props.hide(this.state.text)}
            type=""
            className="modal-btn">Cancel</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // return {
  //   list: state.guests
  // }
  return state
}

export default connect(mapStateToProps, { editGuest })(EditGuest);
