import React, { Component } from 'react';

class CommentInput extends Component {
  constructor(props) {
    super(props);  
    this.handleSubmit = this.handleSubmit.bind(this) 
    this.handleChange = this.handleChange.bind(this) 
    this.state = {
      comment: ""
    }
  }

  handleChange(e) {
    this.setState({comment: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onUpdate(this.state.comment)
    this.setState({comment: ""})
  }

  render() {
    return (
      <div className="comment_div">
        <span className="like_button">
          <span className="glyphicon glyphicon-heart unliked" aria-hidden="true"></span>   
        </span> 
        <form onSubmit={this.handleSubmit} 
              className="new_comment">
          <div className="field">
            <input className="comment_input" 
                   placeholder="Add a comment..." 
                   type="text"
                   value={this.state.comment}
                   onChange={this.handleChange}/>
          </div>
        </form>
      </div> 
    )
  }

}

export default CommentInput;
