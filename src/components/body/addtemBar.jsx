import React, { Fragment } from 'react'
import { TouchableOpacity, StyleSheet, TextInput, Text, View } from "react-native";


class AddItemBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    addTodo = () => {
        this.props.data(this.state.value)
        this.setState({value: ''})
    }

    render(){

        return(
            <View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        placeholder= 'Créer une tache . . .'
                        value={this.state.value}
                        onChangeText={value => this.setState({value})}
                    />
                    <TouchableOpacity 
                        style={styles.touchableOpacity}
                        onPress={this.addTodo}
                    >
                        <Text style={styles.ajouter}>Ajouter</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.taskInfosContainer}>
                    <View>
                        <Text style={styles.taskCompteur}> {this.props.taskCreate} </Text>
                        <Text>Taches créées</Text>
                    </View>
                    <View>
                        <Text style={styles.taskCompteur}> {this.props.taskComplete} </Text>
                        <Text>Taches completés</Text>
                    </View>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%'
    },
    textInput: {
		height: 40,
		fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        padding: 5,
        marginLeft: '2%',
        borderRadius: 5,
        borderWidth: 1,
        minWidth: '80%'
    },
    touchableOpacity: {
        height: 40,
        marginLeft: 2,
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#8b008b',
        justifyContent: 'center'
    },
    ajouter: {
        color: 'white',
    },
    taskInfosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '2%',
        marginRight: '2%'
    },
    taskCompteur: {
        fontWeight: 'bold'
    }
})

export default AddItemBar;