import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>YouTube Rewind 2018 Portfolio</h2>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </div>
    );
  }
}
