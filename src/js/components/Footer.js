import React from "react";

export default class Header extends React.Component {
  constructor(){
    super();
    this.name = "Ross";
  }

  render(){
    return (
      <div>
        <h1>It Might work, {this.name}!</h1>
      </div>
    );
  }

}
