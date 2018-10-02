import React, { Component } from 'react';

//import './App.css';
import SidebarMobile from './include/SidebarMobile';
import SideBarDesktop from './include/sidebarDesktop';
import Container from './include/container';
class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <SidebarMobile></SidebarMobile>
        <SideBarDesktop></SideBarDesktop>
        <Container></Container>
      </div>
    );
  }
}

export default App;
