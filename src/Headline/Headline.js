import React, { Component } from 'react';

import './Headline.css';

class Headline extends React.Component {
    render() {
      return ( 
        <header className="header">
        <h1 id="title1" class="text-center">Omedia Health App</h1>
        <p id="description" class="description text-center">
         Wish you good luck
        </p>
      </header>
      );
    }
}



export default Headline;