import React, { Component } from 'react';
class Header extends Component {
  render () {
    return (
      <div>
        <header className='header grad-bg'>
          <img src={'/media/logo-serverless-sea.png'} alt={'ServerlessDays SEA logo'} className='responsive-img' />
          <h2>One Day. One Track. One Community.</h2>
          <h5 className='top-marg'>October 4th, 2018 - Seattle, WA</h5>
        </header>
      </div>
    );
  }
}

export default Header;
