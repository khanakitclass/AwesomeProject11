import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../assets/colors/colors';


export default function ClockFun(props) {
    //1.
    const [time, setTime] = useState(new Date());

    //It is used to implement lifecucle method in function based component.
    useEffect(() => {
        //3. componentDidMount
        //4. componentDidUpdate
        let timeRef = setInterval(() => {
            tick();
        }, 1000);

        //5. componentWillUnmount
        return () => {
            clearInterval(timeRef);
        }

    }, []);

    const tick = () => {
        setTime(new Date())
    }
    
    //2.
    return (
        <View>
            <Text style={[style.timeHeading, style.commonHeading]}>Clock function based component <Feather name="edit" color={'red'} size={50} /></Text>
            <Text style={style.timeData}>{time.toLocaleTimeString()}</Text>
            <Text style={{color: 'red'}}>OK</Text>
        </View>
    )
}

const style = StyleSheet.create({
    commonHeading: {
        backgroundColor: colors.primary,
        fontFamily: 'Poppins-ExtraBold'
    },
    timeHeading: {
        fontSize: 70,
        textAlign: 'center',
        color: 'blue'
    },
    timeData: {
        fontSize: 50,
        color: colors.primaryFont
    }
})