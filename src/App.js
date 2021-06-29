import React, {Component} from 'react';
import logo from './logo.svg';
import "./assets/css/styles.css";
import EventContainer from './components/EventContainer'
import MyEventContainer from './components/MyEventContainer'

import {NavLink, Route, Switch} from 'react-router-dom'

//import Button from '@material-ui/core/Button';


const TheKey = "/?app_id=bands_in_town"
const TheURL = "https://rest.bandsintown.com/artists/"  //keys and urls from bands in town api

class App extends Component {
  state = {
    band: [],
    events: [],
    allEvents: [],
    myEvents: [],                       //declaring my states
    myEventsClicked: false
  }

  renderBandEvents = (band) => 
  {                                              //band is the name of band attached with key and url and fetch statement to recieve events of that band 
    fetch(TheURL + band + TheKey )
    .then(x => x.json()).then((band) =>
     {
      this.setState({band: band})
      console.log("mahamhere" + band)
    })

    fetch(TheURL + band + '/events' + TheKey)
    .then(x => x.json()).then((events) => {
      this.setState({
        events: events,
        allEvents: events
      })
      console.log("maham2" + events )
    })
  }

  changeEvents = (events) => 
  {
    this.setState({events: events})
  }

  getBand = (event) => 
  {
    this.setState({band: event.target.value})
  }

  handleKeyPress = (event) => 
  {
    event.preventDefault()
    this.renderBandEvents(this.state.band)
  }

  addToMyEvents = (e) => 
  {
    e.target.style.display = 'none';
    let addEvent = this.state.events.find(event => event.id === e.target.id)
    this.setState({
      myEvents: [
        ...this.state.myEvents,
        addEvent
      ]
    })
  }

  removeFromMyEvents = (e) =>
  {
    let removeEvent = this.state.myEvents.filter(event => event.id !== e.target.id)
    this.setState({
      myEvents: removeEvent
    })
  }

  myEvents = (e) =>
  {
    this.setState({myEventsClicked: true})
  }

  render() {

    if (!this.state.myEventsClicked) 
    {
      return (
      <div className="App">

        <header>
          <h1 className="App-title"></h1>
      
        </header>


        

        <a href='http://localhost:3000/'>
        <p className="App-intro">
          BANDS IN TOWN!
        </p>
        </a>

        <div>

          <form onSubmit={this.handleKeyPress}>

          <div className="boxbox row" >
            <input className="search col-sm-9" type="text" onChange={this.getBand} placeholder='Search a Band'/>
            <input className="submit col-sm-2" type="submit" value="GO" style={{marginLeft:'49px'}}/>
          </div>

          </form>

          <br></br>


      </div>

          <div className='my-events' onClick={this.myEvents}>
            <br></br>
            <div className="events-text">
              <span> S </span>
              <span> W </span>
              <span> O </span>
              <span> H </span>
              <span> S </span>
              <br/>
              <span> Y </span>
              <span> M </span>

            </div>

           </div>


        <div className="Band-photo">
          <img src={this.state.band.image_url} height='200'></img>
        </div>

       
        <div className="Band-photo1">
        <p style={{textcolor:"red"}}> <a href='#'>.........</a></p>
        </div>

    {this.state.band.facebook_page_url  ?  <button id='plus' className="addButton"   > <a href={this.state.band.facebook_page_url} style={{textcolor:'white'}}>Facebook</a></button>

     :''}


        <EventContainer
          band={this.state.band}
          events={this.state.events}
          allEvents={this.state.allEvents}
          changeEvents={this.changeEvents}
          addToMyEvents={this.addToMyEvents}
          myEventsClicked={this.state.myEventsClicked}
          />

      </div>);
    } 
    else
     {
      return (
      <div className="App">
        <header>
          <h1 className="App-title"></h1>
        </header>
        <a href='http://localhost:3000/'>
          <p className="App-intro">
            BANDS IN TOWN!
          </p>
        </a>
        <div style={{
            marginLeft: '-25% !important'
          }}>


          <MyEventContainer removeFromMyEvents={this.removeFromMyEvents} myEventsClicked={this.state.myEventsClicked}
           className="myEventContainer" myEvents={this.state.myEvents}/>

        </div>
      </div>)
    }
  }
}

export default App;
