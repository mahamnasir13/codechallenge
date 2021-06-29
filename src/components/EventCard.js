import React, { Component } from "react";
import "../assets/css/styles.css";
import MyEventContainer from "./MyEventContainer";
import { Card } from "antd";

class EventCard extends Component {
  render() {
    let { datetime, lineup } = this.props.event;
    let dateSlice = datetime.slice(5, 10);
    let monthNames = [
      "whatever",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (!this.props.myEventsClicked) {
      return (
        <div className="card-box mr-5 mb-5 ml-2">
          <Card title="Events" style={{ width: 300 }}>
            <p>
              {" "}
              <span id="month" style={{ marginTop: "40px !important" }}>
                {monthNames[parseInt(dateSlice.slice(0, 2))]}
              </span>
              <span id="day"> {parseInt(dateSlice.slice(3, 5))}</span>
            </p>
            <p className="style-paragrapgh"> {this.props.event.venue.name}</p>
            <p>
              {this.props.event.venue.city},{" "}
              {(this.props.event.venue.region, this.props.event.venue.country)}
            </p>
            <button
              id="plus"
              className="addButton"
              id={this.props.event.id}
              onClick={(e) => this.props.addToMyEvents(e)}
            >
              Add Show
            </button>
          </Card>

          {/* <div id="dateSpan" className="col-sm">
          
          <div style={{height:'12px'}}></div>
          <span id="month" style={{marginTop:'40px !important'}}>{monthNames[parseInt(dateSlice.slice(0,2))]}</span>
          <span id="day"> {parseInt(dateSlice.slice(3,5))}</span>
          <br/>
      </div> */}

          {/* <div id='venue' className="col-6">
          <br/>
          {this.props.event.venue.name}
        </div> */}

          {/* <div id='city' className="col-sm">
          <br/>
          {this.props.event.venue.city}, {this.props.event.venue.region, this.props.event.venue.country}
        </div> */}

          {/* <div >
            <br/>
            <br/>
            <button id='plus' className="addButton" id={this.props.event.id} onClick={(e) => this.props.addToMyEvents(e)}>Add Show</button>
          </div> */}
        </div>
      );
    } else {
      return (
        <div className="card-box mr-5 mb-5 ml-2">
          <Card title="Events">
            <div className="d-flex justify-content-around">
              <p className="d-flex">
                <span id="month" className="mr-2">
                  {monthNames[parseInt(dateSlice.slice(0, 2))]}
                </span>
                <span  style={{ fontSize: '28px'}}> {parseInt(dateSlice.slice(3, 5))}</span>
              </p>
              <p className="style-paragrapgh"> {this.props.event.venue.name}</p>
              <p>
                {this.props.event.venue.city},{" "}
                {
                  (this.props.event.venue.region,
                  this.props.event.venue.country)
                }
              </p>
              <button
                id="remove"
                className="removeButton"
                id={this.props.event.id}
                onClick={(e) => this.props.removeFromMyEvents(e)}
              >
                Remove
              </button>
            </div>
          </Card>
        </div>
      );
    }
  }
}

export default EventCard;
