/*
  AppLaunch 2017 Week 5 - InstaPix
*/

/* Importing all the required Library and Files */
import React, {Component} from 'react';
import ImageList from './ImageList.js';
// import './App.css';


/* Declaring the Component name, in this case, App is the Main (Top) component */
class App extends Component {

  constructor(props) {
    /* This means allow data from Parent */
    super(props);
    /* An object (Array) list of Data for the Instagram App.
      From App component passing down as Props to Each Component.  */
    this.state = {
      users: [
        {
          id: 1,
          name: 'Robert Downey Jr.'
        }, {
          id: 2,
          name: 'Gigi Hadid'
        }
      ],
      images: [
        {
          id: 1,
          url: 'http://lorempixel.com/output/fashion-q-c-640-480-1.jpg'
        }, {
          id: 2,
          url: 'http://lorempixel.com/output/fashion-q-c-640-480-3.jpg'
        }, {
          id: 3,
          url: 'http://lorempixel.com/output/fashion-q-c-640-480-4.jpg'
        }
      ]
    }
  }

  /* Render components as following */
  render() {
    return (
      <div className="App">
        <ImageList images={this.state.images}/>
        <img src='./logo.svg' className='App-logo' />
      </div>
    );
  }

}

/* Declaring the name of this component */
export default App;
