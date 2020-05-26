import React, { Component } from 'react';
import "./Layout.scss"
import Header from "../components/Header/Header"
class Layout extends Component   {
render () {
  return (
    <div className ="layout"> <Header/>{this.props.children}</div>)
}
}
export default Layout


