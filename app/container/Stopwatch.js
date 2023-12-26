import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function StopWatch() {
    const [active, setActive] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timeRef = null;

        console.log("mount");

        if (active) {
            timeRef = setInterval(() => {
                setTime(time + 1);
            }, 1000)
        }

        return () => {
            console.log("unmount");
            clearInterval(timeRef);
        }

    }, [active, time])

    const handleStart = () => {
        setActive(true);
    }

    const handlePause = () => {
        setActive(false);
    }

    const handleReset = () => {
        setActive(false);
        setTime(0)
    }

    console.log(active, time);

    return (
        <View>
            <Text>{time}</Text>

            {
                active ?
                    <>
                        <Button
                            title='Pause'
                            onPress={() => handlePause()}
                        />

                        <Button
                            title='Reset'
                            onPress={() => handleReset()}
                        />
                    </> :
                    <>
                        <Button
                            title={time ? 'Resume' : 'Start'}
                            onPress={() => handleStart()}
                        />
                        {
                            time === 0 ?
                                null :
                                <Button
                                    title='Reset'
                                    onPress={() => handleReset()}
                                />
                        }

                    </>
            }




        </View>
    )
}