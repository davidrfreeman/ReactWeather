import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="text-center page-title">About Component</h1>
      <p>This is a weather app I built for The Complete React Web Developer Course</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map API to search for weather data by city name
        </li>
      </ul>
    </div>
  );
};

export default About;
