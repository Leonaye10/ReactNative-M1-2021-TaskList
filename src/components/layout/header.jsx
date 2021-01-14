import React from 'react'
import { Text, StyleSheet, View } from "react-native";


class Header extends React.Component {

    currentDate = () => {
        var date = new Date().getDate();
        var month = this.monthToString(new Date().getMonth());
        var day = this.dayToString(new Date().getDay());
        return day + ' ' + date + ' ' + month; 
    }

    dayToString = (day) => {
        switch (day) {
            case 1:
                return 'Lundi'
                break;
            case 2:
                return 'Mardi'
                break;
            case 3:
                return 'Mercredi'
                break;
            case 4:
                return 'Jeudi'
                break;
            case 5:
                return 'Vendredi'
                break;
            case 6:
                return 'Samedi'
                break;
            case 7:
                return 'Dimance'
                break;
            default:
                break;
        }
    }

    monthToString = (month) => {
        switch (month) {
            case 0:
                return 'Janvier'
                break;
            case 1:
                return 'Fevrier'
                break;
            case 2:
                return 'Mars'
                break;
            case 3:
                return 'Avril'
                break;
            case 4:
                return 'Mai'
                break;
            case 5:
                return 'Juin'
                break;
            case 6:
                return 'Juillet'
                break;
            case 7:
                return 'Aout'
                break;
            case 8:
                return 'Septembre'
                break;
            case 9:
                return 'Octobre'
                break;
            case 10:
                return 'Novembre'
                break;
            case 11:
                return 'Decembre'
                break;
            default:
                break;
        }
    }

    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.header}>{this.currentDate()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginLeft: '2%'
    },
    header: {
        marginTop: '5%',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Header;