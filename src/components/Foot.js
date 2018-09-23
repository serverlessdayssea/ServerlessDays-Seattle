import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Scrollchor from 'react-scrollchor';
import { Footer } from 'react-materialize';

function Foot () {
  return (
    <footer>
      <Footer copyrights={
        <div>
          © 2018 Serverless Days Seattle &nbsp;
          <a href="https://twitter.com/serverlessSEA" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
        </div>
      }
        links={
          <div>
            <div className='space-foot hide-on-med-and-down' />
            <ul className='left-align'>
              <li>Tickets</li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='grey-text text-lighten-3' to='/about'>About</Link></Scrollchor></li>
              <li><Link className='grey-text text-lighten-3' to='/location#venue'>Venue</Link></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='grey-text text-lighten-3' to='/speakers'>Speakers</Link></Scrollchor></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='grey-text text-lighten-3' to='/schedule'>Schedule</Link></Scrollchor></li>
              <li><Link className='grey-text text-lighten-3' to='/about#coc'>Code of Conduct</Link></li>
              <li><a href="https://twitter.com/serverlessSEA" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#veryTop'>Back to top</Scrollchor></li>
            </ul>
          </div>
        }
        className='copyrights'
      >
        <div className='space-foot hide-on-med-and-down' />
        <div className='small-space hide-on-med-and-up' />
        <h5 className='white-text left-align normal'>ServerlessDays Seattle</h5>
        <p className='grey-text text-lighten-4 left-align'>October 4th, 2018
        <br />Nesholm Family Lecture Hall at Marion Oliver McCaw Hall<br />321 Mercer St <br />Seattle, WA 98109</p>
      </Footer>
    </footer>
  );
}

export default Foot;

