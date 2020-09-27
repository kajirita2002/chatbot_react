import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: {},
      open: false
    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}


