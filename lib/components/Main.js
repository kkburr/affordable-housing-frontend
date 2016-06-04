import React from 'react';
import Map from './Map';
export default class Main extends React.Component {

  render() {
    return (
      <div>
        <div id="menu">
          <div id="input-addresses">
            <h1 id="main-title">NeighborHome</h1>
            <form action="/homes" method="post">
              <div className="this">
              </div>
              <div className="mix round-edges-35">
                <img width="35px" src="http://neighborhome.herokuapp.com/assets/dollar-sign-abf74b4fe8560f5b22412578adbd2e34f5ab4f8eea8f2491d02aba65ffbbd1bf.png" alt="Dollar sign" />
              </div>
              <div className="price-field">
              </div>

              <div className="trans-button round-edges-50">
                <label className="label_item">
                  <img width="50px" src="http://neighborhome.herokuapp.com/assets/bus-c99280cf73c3ded2ae092a20c4e9b99df925fa29aebec929d4be21b4db4101f8.png" alt="Bus" />
                </label>
              </div>
              <div className="trans-button round-edges-50">
                <label className="label_item">
                  <img width="50px" src="http://neighborhome.herokuapp.com/assets/car-6c964c3c0c0b69fb8c81a51c4a35df4bcff9d8b62ac85bb62e84d6245b88d2d5.jpg" alt="Car" />
                </label>
              </div>
              <div className="trans-button round-edges-50">
                <label className="label_item">
                  <img width="50px" src="http://neighborhome.herokuapp.com/assets/person-28c586a20e61e355b8000ba0a4d295eb8b09628e08522283b028e13d8639014b.jpg" alt="Person" />
                </label>
              </div>
              <div className="trans-button round-edges-50">
                <label className="label_item">
                  <img width="50px" src="http://neighborhome.herokuapp.com/assets/bike-50e8514251189d8686b8d6f765f3eda7dfd2b9f63a7d5ee5bd81216b74637f74.jpg" alt="Bike" />
                </label>
              </div>
            </form>
          </div>
        </div>
        <Map />
      </div>
    );
  }
}

// <input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="yGUlg40jSoBpEvsRlfeui/39vE0lvCmIYvDMT23jPbOTl6TT8gTOsDrUCPpR6upbKOmi6Hyg3jR6gEBwDeaiew==" />
// <input type="text" name="Address 1" id="Address_1" value="1510 Blake st. Denver CO" class="address-fields" />
// <input type="text" name="Address 2" id="Address_2" value="Elkhart Elementary Aurora CO" class="address-fields" />
// <input type="text" name="Address 3" id="Address_3" value="Denver Art Museum" class="address-fields" />
// <input type="text" name="Max Price" id="Max_Price" value="Coming soon" class="price" />
// <input type="radio" class="radio_item" value="walking" name="transportation" id="walking">
// <input type="radio" class="radio_item" value="bicycling" name="transportation" id="bicycling">
// <input type="submit" id="submit-button" value="Find some neighborhoods!" >
// <input type="radio" class="radio_item" value="transit" name="transportation" id="transit">
// <input type="radio" class="radio_item" value="driving" name="transportation" id="driving">
