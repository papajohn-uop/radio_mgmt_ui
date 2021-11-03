import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";


//This is for lower part of screen



class ReadioDeviceInfo extends Component {
  renderCard(resource) {
    console.log("--->")
    console.log(resource)
    return (
      <Card>
        <CardImg src={resource.image} alt={resource.name} />
      </Card>
    );
  }

  renderInfo(resource) {
    return (
      <ul className="list-unstyled">
        <li>
          <h6>Name :</h6>
          <div>{resource.name}</div>
        </li>

        <li>
          <h6>Type : </h6>
          <div>{resource.type}</div>
        </li>

        <li>
          <h6>Attack: </h6>
          <div>{resource.attack}</div>
        </li>

        <li>
          <h6>Damage : </h6>
          <div>{resource.damage}</div>
        </li>

        <li>
          <h6>Description : </h6>
          <div>{resource.description}</div>
        </li>
      </ul>
    );
  }
  render() {
    const resource = this.props.resource;
    if (resource != null)
      return (
        <div className=" cardInfo p-5 ">
          <div className="row">
            <div className="col-12 col-md-5 ">{this.renderCard(resource)}</div>
            <div className="col-12 col-md-5 border border-primary">
              <h4>Card Information</h4>
              {this.renderInfo(resource)}
            </div>
          </div>
        </div>
      );
    else return <div />;
  }
}

export default ReadioDeviceInfo;
