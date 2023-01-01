import React from 'react';
import './App.css';
import Counter from './Components/Counter';

class App extends React.Component {
  state = {
    Person: {
      fullName: "Bayoudh Youssef",
      bio: "I am studying at GMC",
      imgSrc: "photo 3.jpg"
      
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Not Found"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show  &&  <Counter/>
        }
      </>
    );
  }
}

export default App;