import React, { Component } from 'react';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p onClick={e => this.props.onIncrement()} > + </p>
        <p onClick={e => this.props.onDecrement()}> - </p>
        <p> value: {this.props.propsValue} </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    propsValue: state.myValue
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () =>  dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({ type: 'DECREMENT'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
