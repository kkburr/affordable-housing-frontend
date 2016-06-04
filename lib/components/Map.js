import React from 'react';
import { render } from 'react-dom';


export default class Map extends React.Component {
  render() {
    return (
      <div id="map-container">
        <div id="map"></div>
      </div>
    )
  }
}
