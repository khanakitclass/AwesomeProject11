import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Clock extends Component {
    //1. Initialize state value
    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    //3. It is called after mounting component. It is used get data from server.
    componentDidMount = () => {
        this.timeRef = setInterval(() => {
            this.tick();
        }, 1000);
    }

    //4. It is used to do something when particular state or props value changed.
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.time !== this.state.time) {
            console.log("componentDidUpdate");
        }

        
    }

    //5. It is called when we move to another component. It is used to realased occupied resources.
    componentWillUnmount = () => {
        clearInterval(this.timeRef);
    }
    
    //2. Display. Whenever state value changed, it is called.
    render() {
        return (
            <View>
                <Text>{this.state.time.toLocaleTimeString()}</Text>
            </View>
        )
    }
}