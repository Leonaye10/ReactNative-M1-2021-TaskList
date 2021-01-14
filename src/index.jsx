import React from 'react'
import { StyleSheet, View, Container } from "react-native";
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Body from './components/body/index'

class Index extends React.Component {

    render(){

        return(
            <View style={styles.container}>

                <Header/>
                
                <Body/>
                
                <Footer/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Index;