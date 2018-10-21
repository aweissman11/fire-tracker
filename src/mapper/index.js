import React, { Component } from 'react'

import ReactMapboxGl, { Layer, Feature, Marker, ScaleControl, ZoomControl } from "react-mapbox-gl";

import './mapper.css';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiaWJkdjQ1MjEiLCJhIjoiY2puaHFxaWQyMGdzajN2cGNza2NxeGdqNyJ9.-9cHdYVwZSFpfy413FUNeQ"
});

const coordinatePairs = [
  [
    -73.9749,
    40.7736
  ],
  [
    -72.9749,
    40.7736
  ]
]

class Mapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapZoom: 8,
      outerDiameter: 0,
      innerDiameter: 0,
      mapCenter: [
        -73.9749,
        40.7736
      ],
      fireRadius: 2
    }
  }
  
  componentDidMount() {
    // const response = await fetch('heroku.sure-fire/api/v1/fires?reno,tx');
    // const data = await response.json();




    this.setState({
      outerDiameter: (this.state.mapZoom ** 2) * this.state.fireRadius,
      innerDiameter: ((this.state.mapZoom ** 2) / 2) * this.state.fireRadius
    })
  }


  zooming = (e) => {
    const nowZoom = e.scrollZoom._map.transform.zoom;
    this.setState({
      mapZoom: nowZoom,
      outerDiameter: (nowZoom ** 2) * this.state.fireRadius,
      innerDiameter: (nowZoom ** 1.5) * this.state.fireRadius
    })
    console.log(e.scrollZoom._map.transform.zoom)
  }

markers = () => {
  return coordinatePairs.map( pair => {
    return (
      <Marker
      key={pair}
      coordinates={pair}
      anchor="bottom">
      {/* <img className='fire-img' src={'https://www.creativefabrica.com/wp-content/uploads/2018/07/Fire-Flame-Logo-Vector-by-DEEMKA-STUDIO-2-580x406.jpg'}/> */}
      <div 
        className='outer-div'
        style={
          {
            height: `${this.state.outerDiameter}px`,
            width: `${this.state.outerDiameter}px`,
          }
        }
        >
        <div 
          className='marker-div'
          style={
            {
              height: `${this.state.innerDiameter}px`,
              width: `${this.state.innerDiameter}px`,
            }
          }
        >
        </div>
      </div>
    </Marker>
    )
  })
}

  render() {
    console.log('outer', this.state.outerDiameter)
    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw",
          }}
          center={this.state.mapCenter}
          zoom={
            [this.state.mapZoom]
          }
          onZoom={
            this.zooming
          }
        >
          <ZoomControl position='bottom-left'/>
          <ScaleControl />
          {
            this.markers()
          }
        </Map>
      </div>
    )
  }
}

export default Mapper;



