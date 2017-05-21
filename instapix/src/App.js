/*
  AppLaunch 2017 Week 5 - InstaPix
*/

/* Importing all the required Library and Files */
import React, {Component} from 'react';
import ImageList from './ImageList.js';
import './App.css';


/* Declaring the Component name, in this case, App is the Main (Top) component */
class App extends Component {

  constructor(props) {
    /* This means allowing data from Parent */
    super(props);
    /* An object (Array) list of Data for the Instagram App.
      From App component passing down as Props to Each Component.  */
    this.state = {
      images: [
        {
          id: 1,
          posted_by: 'Robert Downey Jr.',
          url: 'http://images1.villagevoice.com/imager/u/original/6438169/8762051.0.jpg',
          comments: {
            'Gigi Hadid': 'Nice picture!'
          }
        }
      ]
    }
  }

  /* Render components as following */
  render() {
    return (
      <div className="container">
        <ImageList images={this.state.images} />
      </div>
    );
  }

}

/* Declaring the name of this component */
export default App;
