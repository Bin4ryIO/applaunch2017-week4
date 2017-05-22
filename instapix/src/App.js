import React, {Component} from 'react';
import Post from './Post.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="feeds col-xs-6 col-xs-offset-3">
        <Post/>
      </div>
    );
  }

}

/* Declaring the name of this component */
export default App;
