import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

class Nav extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 70;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll (isTop) {
    this.setState({ isTop });
  }

  render () {
    return (
      <div>
        <div id='navbar-custom' className='navbar-fixed'>
          <nav className={this.state.isTop ? 'trans transparent z-depth-0' : 'trans white z-depth-1 purp-text'}>
            <div className='nav-wrapper container'>
              <a className='right tickets-btn' href='/tickets'><span className='tickets-txt valign-wrapper'>Buy Tickets</span></a>
              <a href='/' data-target='mobile-demo' className={this.state.isTop ? 'hide-on-med-and-up' : 'hide-on-med-and-up purp-text'}><i className='material-icons'>home</i></a>
              <ul id='nav-mobile' className='left hide-on-med-and-down'>
                <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><NavLink componentclass='span' to='/' className={this.state.isTop ? 'bold no-bg' : 'purp-text no-bg'}>Home</NavLink></Scrollchor></li>
                <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><NavLink componentclass='span' to='/about' className={this.state.isTop ? 'bold no-bg' : 'purp-text no-bg'}>About</NavLink></Scrollchor></li>
                <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><NavLink componentclass='span' to='/location' className={this.state.isTop ? 'bold no-bg' : 'purp-text no-bg'}>Location</NavLink></Scrollchor></li>
                <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><NavLink componentclass='span' to='/speakers' className={this.state.isTop ? 'bold no-bg' : 'purp-text no-bg'}>Speakers</NavLink></Scrollchor></li>
                <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><NavLink componentclass='span' to='/schedule' className={this.state.isTop ? 'bold no-bg' : 'purp-text no-bg'}>Schedule</NavLink></Scrollchor></li>
                <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><NavLink componentclass='span' to='/sponsors' className={this.state.isTop ? 'bold no-bg' : 'purp-text no-bg'}>Sponsors</NavLink></Scrollchor></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
