import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import City from './City';

// state : It is an object that store data of particular Component.
// props: It is used to pass data from one component to another component.

export default class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            countryName: 'India',
            zone: 'Asia'
        }
    }

    changeCountry = () => {
        console.log("ok");
        this.setState({
            countryName: 'UK',
            zone: 'abcd'
        })
    }
    
    render() {
        return (
            <View>
                <Text>Country Component</Text>
                <Text>{this.state.countryName}</Text>
                <Text>{this.state.zone}</Text>

                <Button 
                    title='Change Country'
                    onPress={() => this.changeCountry()}
                />

                <City country={this.state.countryName} z={"ok"} />
            </View>
        )
    }
}