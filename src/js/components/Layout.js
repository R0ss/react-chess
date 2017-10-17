import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "Ross"
    }
  }

  changeTitle(title){
    this.setState({title});
  }

  render(){
    return (
      <div>
        <Nav title='React Chess' />
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />

        {this.props.children}
        <Footer />
      </div>
    );
  }

}
