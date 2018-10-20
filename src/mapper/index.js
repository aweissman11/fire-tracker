import React, { Component } from 'react'

import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

import './mapper.css';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiaWJkdjQ1MjEiLCJhIjoiY2puaHFxaWQyMGdzajN2cGNza2NxeGdqNyJ9.-9cHdYVwZSFpfy413FUNeQ"
});

class Mapper extends Component {
  render() {
    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "97vh",
            width: "100vw",
          }}
          center={[
            -73.9749,
            40.7736
          ]}
        >
          <Marker
            coordinates={[
              -73.9749,
              40.7736
            ]}
            anchor="bottom">
            {/* <img className='fire-img' src={'https://www.creativefabrica.com/wp-content/uploads/2018/07/Fire-Flame-Logo-Vector-by-DEEMKA-STUDIO-2-580x406.jpg'}/> */}
            <div className='marker-div'>
              <p className='marker-text'>Marker</p>
            </div>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default Mapper;

