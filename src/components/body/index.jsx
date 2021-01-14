import React from 'react'
import { ScrollView, StyleSheet, View, FlatList, SafeAreaView, Text, LogBox } from "react-native";
import AddItemBar from './addtemBar'
import Icon from 'react-native-vector-icons/Feather';


LogBox.ignoreLogs([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

class Index extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            Data: [],
            taskCreate: 0,
            taskComplete: 0
        }

        this.addTodo = this.addTodo.bind(this)
    }

    taskCreate = () => {
        this.setState({ taskCreate: this.state.taskCreate + 1 })
    }

    taskComplete = () => {
        this.setState({ taskComplete: this.state.taskComplete + 1 })
    }

    addTodo = (value) => {
        let tabs = this.state.Data
        tabs.push({value, checked: false, key: new Date()})
        this.setState({Data: tabs})
        this.taskCreate()
    }

    checkTodo = (key) => {
       let tempData = this.state.Data
       tempData.forEach(data => {
           if(data.key === key) data.checked = !data.checked
           return data
       })
       this.setState({ Data: tempData})
       this.taskComplete()
    }

    deleteTodo = (key) => {
        let tempData = this.state.Data.filter((item) => item.key != key)
        this.setState({ Data: tempData})
        
    }

    RenderItem = ({ item }) => {
        return(
            <View style={styles.listeContainer}>
                <Icon
                    name={item.checked? 'check' : 'square'}
                    size={30}
                    color={item.checked? 'green' : 'black'}
                    style={{ marginLeft: 15 }}
                    onPress={() => this.checkTodo(item.key)}
                />
                <Text style={styles.listItem}>{item.value}</Text>
                <Icon
                    name="trash-2"
                    size={30}
                    color="red"
                    style={{ marginLeft: 'auto' }}
                    onPress={() => this.deleteTodo(item.key)}
                />
            </View>
        )
        
    }

    render(){

        return(
            <SafeAreaView style={styles.container}>
                
                <AddItemBar 
                    data={(item) => this.addTodo(item)}
                    taskCreate={this.state.taskCreate}
                    taskComplete={this.state.taskComplete} 
                />
                
                <ScrollView style={styles.scrollView}>
                    <View>
                        <FlatList 
                            data={this.state.Data}
                            keyExtractor={(item) => item.key.toString()}
                            renderItem={(item) => this.RenderItem(item)}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        width: '100%',
        marginTop: 10,
    },
    listeContainer: {
        marginTop: '5%',
		flexDirection: 'row',
        width: '100%',
        minHeight: 40,
    },
    listItem: {
		paddingBottom: 20,
		paddingLeft: 10,
		marginTop: 6,
		borderBottomWidth: 1,
		fontSize: 18,
		fontWeight: 'bold',
    }
})

export default Index;