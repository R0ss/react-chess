import React from "react";

export default class GameRoom extends React.Component{
  render(){
    return(
      <div>
        <p>Hamburger {this.props.test} {this.props.user}</p>
      </div>
    );
  }
}
