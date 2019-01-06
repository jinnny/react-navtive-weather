import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// export default class Weather extends Component {
//     render() {
//         return (
//             <LinearGradient colors={['#00c6fb', '#005bea']} style={styles.container}> 
//                 <View style={styles.wheaterMark}>
//                 <Ionicons color='white' size={144} name='ios-rainy'/>
//                     <Text style={styles.wheaterTemperature}>35'</Text>
//                 </View>
//                 <View style={styles.wheaterText}>
//                     <Text style={styles.wheaterTextTitle}>Raining like a MF</Text>
//                     <Text style={styles.wheaterTextSubtitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         )
//     }
// }
const weatherCases = {
    Rain: {
        colors: ['#00c6fb', '#005bea'],
        title: 'Raining',
        subtitle: 'For more info look outside',
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ['#fef253', '#ff7300'],
        title: 'Sunny',
        subtitle: 'Go out',
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors: ['#00ecbc', '#007adf'],
        title: 'Thunderstorm in the house',
        subtitle: 'Actually, outside of the house',
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors: ['#d7d2cc', '#304352'],
        title: 'Clouds',
        subtitle: 'Clouds',
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ['#7de2fc', '#b9b6e5'],
        title: 'Snow',
        subtitle: 'Do you want to build a snowman',
        icon: 'ios-snow'
    },
    Drizzle: {
        colors: ['#89f7fe', '#66a6ff'],
        title: 'Drizzle',
        subtitle: 'Is like rain',
        icon: 'md-rainy'
    },
    Haze: {
        colors: ['#89f7fe', '#66a6ff'],
        title: 'Haze',
        subtitle: 'Is like rain',
        icon: 'md-rainy'
    },
    Mist: {
        colors: ['#89f7fe', '#66a6ff'],
        title: 'Mist',
        subtitle: 'Is like Mist',
        icon: 'md-rainy'
    }
} 
function Weather({weatherName, temp}){
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}> 
            <View style={styles.wheaterMark}>
                <Ionicons color='white' size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.wheaterTemperature}>{temp}º</Text>
            </View>
            <View style={styles.wheaterText}>
                <Text style={styles.wheaterTextTitle}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.wheaterTextSubtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}


Weather.propTypes= {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wheaterMark: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    wheaterTemperature: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 48,
        marginTop: 10
    },
    wheaterText: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    wheaterTextTitle: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 38,
        fontWeight: '300'
    },
    wheaterTextSubtitle: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 24,
        // marginBottom: 100
        marginBottom: 24
    }
})