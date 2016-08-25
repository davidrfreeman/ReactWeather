import React from 'react';

const WeatherMessage = ({temp, location}) => {
  return (
    <div className="row">
      <div className="small-12 large-12">
        <h3>It is {temp} degrees in {location}</h3>
      </div>
    </div>
  );
}

export default WeatherMessage;
