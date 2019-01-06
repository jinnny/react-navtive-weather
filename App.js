import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = '12180f63a39bc133310976109924f4a6';

export default class App extends Component {
  state = {
    isLoaded : false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount(){
    // 위치정보 가져오기 
    navigator.geolocation.getCurrentPosition( 
      position => {
        // setState로 날씨정보 보여줄 세팅
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        })
      }
    ); 
  }
  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    });
  };
  render() {
    const { isLoaded, error, temperature, name } = this.state
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded ? <Weather weatherName={name} temp={Math.floor(temperature - 273.15)}/> : 
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the Funny Weather</Text>
          {error ? <Text style={styles.error}>{error}</Text>: null}
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft: 24,
  },
  error: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});