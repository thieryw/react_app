import React from "react";



export class Toggle1 extends React.Component<{}, { "isToggleOn": boolean }>{
  constructor(props: {}) {
    super(props);
    this.state = {
      "isToggleOn": true
    }

  }

  private handleClick = () => {
    this.setState(
      {
        "isToggleOn": !this.state.isToggleOn
      }
    )
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "on" : "off"}
      </button>
    )
  }

}

//second methode with binding

/*class Toggle2 extends React.Component<{}, { "isToggleOn": boolean }>{

  constructor(props: {}) {
    super(props);
    this.state = {
      "isToggleOn": true
    }

    this.clickHandler = this.clickHandler.bind(this);

  }

  private clickHandler() {
    this.setState(
      state => ({ "isToggleOn": !state.isToggleOn })
    )
  }

  render() {
    return (
      <button onClick={this.clickHandler}>
        {this.state.isToggleOn ? "on" : "off"}
      </button>
    )

  }
}*/

//methode 3 using arrow function in the callback

/*class Toggle3 extends React.Component<{}, { "isToggleOn": boolean }>{
  constructor(props: {}) {
    super(props);
    this.state = {
      "isToggleOn": true
    }
  }

  private clickHandler() {
    this.setState({
      "isToggleOn": !this.state.isToggleOn
    })
  }

  render() {
    return (
      <button onClick={() => this.clickHandler()}>
        {this.state.isToggleOn ? "on" : "off"}
      </button>
    )
  }

}*/

