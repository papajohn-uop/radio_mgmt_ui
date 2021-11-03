import React, { Component } from "react";
import { Card, CardImg, ButtonGroup, Button } from "reactstrap";
import { FILTERS } from "../non-components/filters";







//This if for upper part of screen
class GNodeBs extends Component {


  

  createRadioDeviceElement(displayItem)
  {
    console.log(this.props)
    return(
      React.createElement("div",{style: {key:Math.random().toString(36).slice(2)}, className:"col-2 m-1"},
        React.createElement(Card,{ onClick: () => this.props.resourceSelect(displayItem.id)},"",
          React.createElement("div",{className:"card-body"} ,
            React.createElement("h2",null,displayItem.name),
              React.createElement("p",null,displayItem.description),
              React.createElement("ul",null),
              React.createElement("li",{className:"l1"},"Coffee"),
              React.createElement("li",{className:"l2"},"Tea"),
              React.createElement("h5",null,displayItem.category),
            )
        )
      )
    )
  }

  render() {
    console.log(this.props)
    const resource = this.props.resources
      .filter(({ type }) => {
        return !this.props.filter || type === this.props.filter;
      })
      .map(displayItem => {
        return (
         this.createRadioDeviceElement(displayItem)
     
        );
      });



      
    const filterButtons = FILTERS.map(filterName => {
    //  console.log(filterName)
      return (
        <Button
          key={filterName}
          onClick={() => this.props.resourceFilterSelect(filterName)}
        >
          {filterName}
        </Button>
      );
    });



//This is the right filter panel
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex align-content-start flex-wrap">{resource}</div>
          <div className="p-5 col-1">
            <ButtonGroup size="lg" vertical>
              <h6 style={{ color: "blue" }}>Radio Devices filters</h6>

              <Button onClick={() => this.props.resourceFilterSelect(null)}>
                Allccc
              </Button>
              {filterButtons}
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}
export default GNodeBs;
