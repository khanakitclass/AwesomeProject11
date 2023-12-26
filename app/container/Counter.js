import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        }
    }

    handleInc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <View>
                <Button
                    title='+'
                    onPress={() => this.handleInc()}
                />
                <Text>{this.state.count}</Text>
            </View>
        )
    }
}