import React from 'react'
import { Text, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';


class Footer extends React.Component {


    render(){

        return(
            <View style={styles.container}>
                <Icon
                    name="plus"
                    size={30}
                    color="black"
                    style={styles.iconPlus}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.08,
        justifyContent: 'center'
    },
    iconPlus: {
        marginLeft: '80%',
        borderWidth: 1,
        borderRadius: 15,
        width: 35,
        justifyContent: 'center',
    }
})

export default Footer;