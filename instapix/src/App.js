import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-poster">
          <span className="card-poster__like">420</span>
        </div>

        <div className="card-text">
          <div className="card-meta">
             <span className="card-meta__caption">When they strike, we light up the world</span>
          </div>

          {/* Your journey start here */}
          <button className="card-text__button">Like</button>
          <div className="card-text__input">
            <form>
              <input placeholder="Add a comment" />
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
