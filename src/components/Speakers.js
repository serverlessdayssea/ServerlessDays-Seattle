import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Speakers extends Component {
  render() {
    return (
      <div id='top'>
          <h2 className='center-align'>Speakers</h2>
          <div className='speakers'></div>
          <Row>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Erica Windisch</h5>
                <p class="title">CTO &amp; Founder @IOpipes</p>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Yochay Kiriaty</h5>
                <p class="title">Principal Program Manager at Microsoft Azure</p>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Chase Douglas</h5>
                <p class="title">CTO at Stackery</p>
              </Col>
          </Row>
          <Row>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Brian LeRoux</h5>
                <p class="title">Primary maintainer of arc.codes and wtfjs.com</p>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Ace Nassri</h5>
                <p class="title">Developer Relations Engineer at Google</p>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Matthew Henderson</h5>
                <p class="title">Sr Program Manager for Azure Functions</p>
              </Col>
          </Row>
          <Row>
          <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Ahmet Alp Balkan</h5>
                <p class="title">Engineer at Google Cloud</p>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Josh Carlisle</h5>
                <p class="title">Engineer at AppDynamics</p>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Michael Garski</h5>
                <p class="title">Director of Platform Engineering at Fender Digital</p>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Speakers;