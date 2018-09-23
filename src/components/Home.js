import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import ScrollableAnchor from 'react-scrollable-anchor';
import Map from './Map';
import Tickets from './Tickets';
import Speakers from './Speakers';

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
        <ScrollableAnchor id={'home'}>
            <h2 className='center-align shrinkme'>ServerlessDays in SEA</h2>
          </ScrollableAnchor>
        <Tickets />
          <Speakers />
          
          <Row>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'/media/unicorn_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Inclusive</h4>
              <p>Hone your cloud skills and learn the power of serverless during the conference dedicated to the serverless development community.</p>
            </Col>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'/media/octo_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Real</h4>
              <p>The single day, single track conference for everyone where real users showcase their solution to common problems using serverless platforms.</p>
            </Col>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'/media/moth_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Growing</h4>
              <p>Whether you are a beginner or an expert, meet like minded-people and build your network in the global cloud society.</p>
            </Col>
          </Row>

          
          <div className='container'>
            <h2 className='center-align'>Join us in Seattle!</h2>
            <p>ServerlessDays Seattle will take place at <a href='https://www.mccawhall.com/plan-your-event/event-spaces/nesholm-family-lecture-hall' target='_blank' rel='noopener noreferrer'>Nesholm Family Lecture Hall</a> in downtown Seattle on Thursday, October 4th, 2018.</p>
            <p>Nesholm Family Lecture Hall
              <br />Marion Oliver McCaw Hall
              <br />321 Mercer St
              <br />Seattle, WA 98109</p>
            <div className='space' />
          </div>
        </div>
        <div className='map-div'>
          <Map />
        </div>
      </div>
    );
  }
}

export default Home;
