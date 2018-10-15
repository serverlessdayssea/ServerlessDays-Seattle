import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
/*
/media/headshots/AceNassri.jpg
/media/headshots/BelindaVennam.jpg
/media/headshots/BretMcGowan.png
/media/headshots/BrianLeRoux.jpg
/media/headshots/ChaseDouglas.jpg
/media/headshots/ericawindisch.png
/media/headshots/joshcarlisle.jpg
/media/headshots/MatthewHenderson.jpg
/media/headshots/MichaelGarski.png
/media/headshots/YochayKiriaty.png
*/
class Speakers extends Component {
  render() {
    return (
      <div id='top'>
          <h2 className='center-align'>Speakers</h2>
          <div className='speakers'></div>
          <Row>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Erica Windisch</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/ericawindisch.png" alt="Erica"/>
                <p class="title">CTO &amp; Founder @IOpipes</p>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Brian LeRoux</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/BrianLeRoux.jpg" alt="Brian"/>
                <p class="title">Primary maintainer of arc.codes and wtfjs.com</p>
                <a href="https://fun.brian.io/" target="_blank">Slides</a>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Ace Nassri</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/AceNassri.jpg" alt="Ace"/>
                <p class="title">Developer Relations Engineer at Google</p>
                <a href="/media/slides/Just Keep Functioning.pdf">Slides</a>
              </Col>
          </Row>
          <Row>
              <Col s={12} m={6} l={6} className='center-align top-marg'>
                <h5>Chase Douglas</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/ChaseDouglas.jpg" alt="Chase"/>
                <p class="title">CTO at Stackery</p>
              </Col>
              <Col s={12} m={6} l={6} className='center-align top-marg'>
                <h5>Matthew Henderson</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/MatthewHenderson.jpg" alt="Matthew"/>
                <p class="title">Sr Program Manager for Azure Functions</p>
              </Col>
          </Row>
          <Row>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Belinda Vennam</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/BelindaVennam.jpg" alt="Belinda"/>
                <p class="title">Developer Advocate at IBM</p>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Michael Garski</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/MichaelGarski.png" alt="Michael"/>
                <p class="title">Director of Platform Engineering at Fender Digital</p>
              </Col>
              <Col s={12} m={4} l={4} className='center-align top-marg'>
                <h5>Ahmet Alp Balkan</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/AhmetAlpBalkan.jpeg" alt="Ahmet"/>
                <p class="title">Engineer at Google Cloud</p>
                <a href="/media/slides/Kubernetes+Serverless=Knative.pdf">Slides</a>
              </Col>
          </Row>
          <Row>
              <Col s={12} m={6} l={6} className='center-align top-marg'>
                <h5>Yochay Kiriaty</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/YochayKiriaty.png" alt="Yochay"/>
                <p class="title">Principal Program Manager at Microsoft Azure</p>
              </Col>
              <Col s={12} m={6} l={6} className='center-align top-marg'>
                <h5>Josh Carlisle</h5>
                <img style={{ maxWidth: 196 }} src="/media/headshots/joshcarlisle.jpg" alt="Josh"/>
                <p class="title">Engineer at AppDynamics</p>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Speakers;