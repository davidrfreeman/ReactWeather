import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      location: 'Miami',
      temp: 88,
      isLoading: false
    }
  }

  handleSearch(location) {
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: Math.round(temp),
        isLoading: false
      })
    }, (err) => {
      console.log(err)
      this.setState({
        isLoading: false
      })
    });
  }

  render() {
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div className="row">
        <div className="small-4">
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
      </div>
    );
  }
}
