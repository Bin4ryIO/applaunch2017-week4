import React, { Component } from 'react';
import CommentList from './CommentList.js';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      comments: [],
      value: ''
    }
    this.handleLike = this.handleLike.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newComment = [{
        value: this.state.value,
        id: Date.now(),
      },
    ...this.state.comments
    ];
    this.setState({
      comments: newComment,
      value: '',
    });
  }

  handleLike() {
    console.log("liked!");
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-poster">
          <span className="card-poster__like">{ this.state.likes }</span>
        </div>

        <div className="card-text">
          <div className="card-meta">
             <span className="card-meta__caption">When they strike, we light up the world</span>
          </div>

          <button className="card-text__button" onClick={this.handleLike}>Like</button>
          <div className="card-text__input">
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.onChange} value={this.state.value} placeholder="Add a comment" />
            </form>
          </div>
          <CommentList comments={ this.state.comments }></CommentList>
        </div>
      </div>
    );
  }

}

export default App;
