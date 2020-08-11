
import React from "react";
import {Clock} from "./Clock";




export class Greetings extends React.Component<{ "name": string }>{
  render() {
    return (
      <div>
        <p>
          hello {this.props.name}!
        </p>

        <Clock />
      </div>
    )
  }
}
