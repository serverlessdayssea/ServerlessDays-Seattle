import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Sponsors extends Component {
  render () {
    return (
      <div>
          <h2 className='center-align'>Sponsors</h2>
          {/* <h4 className='center-align'>Gold</h4> */}
          <Row>
            <Col s={12} m={6} l={6} className='center-align top-marg'>
              <img src='/media/microsoft.png' className='responsive-img not-wide'></img>
            </Col>
            <Col s={12} m={6} l={6} className='center-align top-marg'>
              <img src='/media/ibm.png' className='responsive-img not-wide'></img>
            </Col>
            <Col s={12} m={6} l={6} className='center-align top-marg'>
              <img src='/media/stackery-large-stacked-teal-small-w.png' className='responsive-img not-wide'></img>
            </Col>
            <Col s={12} m={6} l={6} className='center-align top-marg'>
              <img src='/media/io_logo_black_rgb_600_600.png' className='responsive-img not-wide'></img>
            </Col>
          </Row>
          <div className='space-foot' />
          <hr/>
      </div>
    );
  }
}

export default Sponsors;
