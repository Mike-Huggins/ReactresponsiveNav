import React from 'react';
import Toolbar from './Components/Toolbar/Toolbar';
import './App.css'
import SideDrawer from './Components/Sidedrawer/Sidedraw';
import Backdrop from './Components/backdrop/backdrop';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  });
};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen:false})
};

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App" style={{height:'100%'}}> 
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main className="mainbody">
         <p>This is the page content</p>
        </main>        
      </div>
    )
  }
}

export default App;
