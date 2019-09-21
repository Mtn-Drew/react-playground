import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { who: "drew"}
    // this.handleButtonClick= this.handleButtonClick.bind(this);
  }

  // handleButtonClick = () => {
  //   this.setState({
  //     who: 'value'
  //   });
  // }

  handleButtonClickReact = () => {
    this.setState({
      who: 'React'
    });
  }
  handleButtonClickFriend = () => {
    this.setState({
      who: 'Friend'
    });
  }
  handleButtonClickWorld = () => {
    this.setState({
      who: 'World'
    });
  }

  render() {
    return(
    <div>
      <p>Hello, {this.state.who}</p>
      <button onClick={this.handleButtonClickWorld}>World</button>
      <button onClick={this.handleButtonClickFriend}>Friend</button>
      <button onClick={this.handleButtonClickReact}>React</button>
    </div>
    )}
}

export default HelloWorld;