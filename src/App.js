import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = { hide : false }
  handlingHide = () => {
    this.state.hide?this.setState({ hide : false }):this.setState({ hide: true })
  }
  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox" onClick={this.handlingHide}/> Mostrar información importante</label>
        {this.state.hide?    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
:null}
      </div>
    );
  }
}

export default App;
