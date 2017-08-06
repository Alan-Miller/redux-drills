import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {addGuest, removeGuest} from './ducks/guestList';
import _ from 'lodash'

class App extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.doSomeLodash = this.doSomeLodash.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addGuest(this.state.text)
    this.setState({
      text: ''
    })
  }

  doSomeLodash() {
    // var yooneek = _.times(3, _.uniqueId.bind(null, "ball_"))
    var alanObj = {name: "Alan", age: 36, best_friend: {name: 'Claire'}}
    // var obj = {name: "Alan", age: 36, friends: ['Lauren', 'Claire'], height: 'whatever'}
    // alert(_.random(200, 300))
    var moores = ['Shannon', ['Lauren', ['Oliver', 'Cole'], 'Claire', 'Olivia']]
    var mooreFavs = {Shannon: 'rosemary', Lauren: 'turtles', Oliver: 'iPad', Cole: 'being chunky', Claire: 'tom kha', Olivia: 'coral'}
    var flatMoores = _.flatMapDeep(moores);
    var flatMillers = ['Kevin', 'Michael', 'Alan', 'James', 'David'];
    var byu = ['Lauren', 'Claire', 'James', 'Alan', 'Shannon', 'Holly']
    // console.log(flattenedList.every(name => name in favorites));
    console.log(_.difference(flatMillers.concat(flatMoores, ['Anna']), byu));
    var all = byu.concat(flatMillers, flatMoores);
    // console.log(_.uniq(all));
    // console.log('random sample: ', _.flatMapDeep(list));
    // console.log(_.has(obj, 'best_friend.name'));
    // console.log(_.omit(obj, ['age', 'height']))
  }

  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3 onClick={this.doSomeLodash}>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => (
            // return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button onClick={() => this.props.removeGuest(i)} className="">Remove</button>
              </div>
            // )
          ))}
        </ul>
        <form onSubmit={this.handleSubmit} className="add-guest">
          Add guest: <input value={this.state.text} className="" onChange={this.handleInputChange}/>
          <button type="" className="">Add</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  }
}

export default connect(mapStateToProps, {addGuest, removeGuest})(App)
