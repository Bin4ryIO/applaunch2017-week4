import React, {Component} from 'react';
import Profile from './Profile.js';
import ImageItem from "./ImageItem.js"
import CommentList from './CommentList.js';
import CommentInput from './CommentInput.js';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "kaii",
        image_url: "https://octodex.github.com/images/grim-repo.jpg"
      },
      image: {
        url: 'http://images1.villagevoice.com/imager/u/original/6438169/8762051.0.jpg'
      },
      comments: [
        {
          user: "kaii",
          text: "Hii"
        }, 
        {
          user: "Apple",
          text: "Wow!!"
        }
      ]
    }

    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(input) {
    console.log(input)
    var newComment = {
      user: "you",
      text: input    
    };

    this.setState((prevState) => ({
      comments: prevState.comments.concat(newComment)
    }));

  }

  render() {
    return (
      <div className="post">
        <Profile user={this.state.user}/>
        <ImageItem image={this.state.image}/>
        <div className="post_details">
          <CommentList comments={this.state.comments}/>
          <CommentInput onUpdate={this.handleUpdate} />
        </div>
      </div>
    )
  }

};


export default Post;
