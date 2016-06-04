import React from 'react';

export default class Main extends React.Component {

  render() {
    return (
      <div id="menu">
        <div id="input-addresses">
          <h1 id="main-title">NeighborHome</h1>
          <form action="/homes" method="post">
              <input name="utf8" type="hidden" defaultValue="&#x2713;" ></input>
              <input type="hidden" name="authenticity_token" defaultValue="yGUlg40jSoBpEvsRlfeui/39vE0lvCmIYvDMT23jPbOTl6TT8gTOsDrUCPpR6upbKOmi6Hyg3jR6gEBwDeaiew==" ></input>
            <div className="ui icon input">
              <i className="marker icon"></i>
              <input type="text" name="Address 1" id="Address_1" defaultValue="1510 Blake st. Denver CO" className="item" ></input>
            </div>
            <div className="ui icon input">
              <i className="marker icon"></i>
              <input type="text" name="Address 2" id="Address_2" defaultValue="Elkhart Elementary Aurora CO" className="item" ></input>
            </div>
            <div className="ui icon input">
              <i className="marker icon"></i>
              <input type="text" name="Address 3" id="Address_3" defaultValue="Denver Art Museum" className="item" ></input>
            </div>            
            <div className="ui disabled icon input">
              <i className="dollar icon"></i>
              <input type="text" name="Max Price" id="Max_Price" defaultValue="Coming soon" className="price" ></input>
            </div>

            <div className="ui icon buttons">
              <button className="ui button"><i className="fa fa-bicycle"></i></button>
              <button className="ui button"><i className="fa fa-bus"></i></button>
              <button className="ui button"><i className="fa fa-car"></i></button>
              <button className="ui button"><i className="fa fa-bicycle"></i></button>
            </div>
            
            <div className="trans-button round-edges-50">
              <input type="radio" className="radio_item" defaultValue="transit" name="transportation" id="transit"></input>
              <label className="label_item">
              </label>
            </div>
            <div className="trans-button round-edges-50">
              <input type="radio" className="radio_item" defaultValue="driving" name="transportation" id="driving"></input>
              <label className="label_item">
                <img width="50px" src="http://neighborhome.herokuapp.com/assets/car-6c964c3c0c0b69fb8c81a51c4a35df4bcff9d8b62ac85bb62e84d6245b88d2d5.jpg" alt="Car" />
              </label>
            </div>
            <div className="trans-button round-edges-50">
              <input type="radio" className="radio_item" defaultValue="walking" name="transportation" id="walking"></input>
              <label className="label_item">
                <img width="50px" src="http://neighborhome.herokuapp.com/assets/person-28c586a20e61e355b8000ba0a4d295eb8b09628e08522283b028e13d8639014b.jpg" alt="Person" />
              </label>
            </div>
            
            <div className="trans-button round-edges-50">
              <input type="radio" className="radio_item" defaultValue="bicycling" name="transportation" id="bicycling"></input>
              <label className="label_item">
                <img width="50px" src="http://neighborhome.herokuapp.com/assets/bike-50e8514251189d8686b8d6f765f3eda7dfd2b9f63a7d5ee5bd81216b74637f74.jpg" alt="Bike" />
              </label>
            </div>
            
            <input type="submit" id="submit-button" defaultValue="Fi nd some neighborhoods!" ></input>
          </form>
        </div>
      </div>
    );
  }
}

