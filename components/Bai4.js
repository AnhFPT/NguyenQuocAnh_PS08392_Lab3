import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Bai4 extends Component {
    render() {
        return (
            <View>
                <Image style={{
                    width: '100%', height: '100%'
                }} source={require('./images/bglab3.jpg')} />
            </View>
        )
    }
    static navigationOptions = {
        title: 'Bài 4 - Images',
    }
}
