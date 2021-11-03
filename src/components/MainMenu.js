import React, { Component } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import GNodeBs from "./RadioDevices";
import RadioDeviceInfo from "./ReadioDeviceInfo";
import { RESOURCES } from "../non-components/resource";



class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: RESOURCES,
      selectedResource: null,
      resourceFilter: null,
      
    };

    
  }

//  resourceSelect(cardId) {
    resourceSelect = (cardId) => {
    console.log("In resource select>",cardId)
    this.setState({ selectedResource: cardId });
    console.log(this.state.selectedResource)
  }




  resourceFilterSelect(filterName) {
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDD")
    this.setState({ resourceFilter: filterName });
  }




  createNavBarElement()
  {
    return(React.createElement(Navbar,{style: {color:"Black", backgroundColor:"Blue"}},
                React.createElement(Container,{} ),
                React.createElement(NavbarBrand,{style:{color:"Black" } , href:"/" } ,"Available gNodeBs")
          )
    )
  }

  createAllgNBsElement()
  {
    return(React.createElement(GNodeBs,{resources:this.state.resources, resourceSelect:this.resourceSelect, filter: this.state.resourceFilter,resourceFilterSelect:this.state.resourceFilterSelect},"dddd"))
  }



  gnbSelect() {
    console.log("PAPA")
    return(this.state.resources.filter(
           resource => resource.id === this.state.selectedResource
         )[0])
  }
  
  
  creategNBInfoElement(ddd)   {
      return(React.createElement(RadioDeviceInfo,{resource:this.gnbSelect()},this.gnbSelect))
   }


  render() {
     return (
       React.createElement("div", null, 
              this.createNavBarElement(),
              this.createAllgNBsElement(),
              this.creategNBInfoElement(),
      React.createElement("div", null ,"level1"), 
      React.createElement("div", null,"level2")
   )

     );
  }
}

export default MainMenu;
