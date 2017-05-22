/*
  AppLaunch 2017 Week 5 - InstaPix
*/

/* Importing all the required Library and Files */
import React, {Component} from 'react';
import CommentList from './CommentList.js';
import './App.css';


/* Declaring the Component name, in this case, App is the Main (Top) component */
class App extends Component {

  constructor(props) {
    /* This means allowing data from Parent */
    super(props);
    /* An object (Array) list of Data for the Instagram App.
      From App component passing down as Props to Each Component.  */
    this.state = {
      comments: [],
      text: ''
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit(event) {
    /* Prevent empty */
    event.preventDefault();

    /* Add Comment into Comments array */
    let newComment = [{
        text: this.state.text,
        id: Date.now(),
      },
    ...this.state.comments
    ];

    this.setState({
      comments: newComment,
      text: '',
    });
  }

  /* Render components as following */
  render() {
    return (
      <div className="container">
        <img src="https://placehold.it/300x300" alt="Hello" />

        {/* Comment input form */}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>Submit</button>
        </form>

        {/* CommentList component declared in JSX style */}
        <CommentList comments={ this.state.comments }></CommentList>
      </div>
    );
  }

}

/* Declaring the name of this component */
export default App;
