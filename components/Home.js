import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'

export default class Home extends Component {
    clickMoveBai1() {
        this.props.navigation.navigate("Bai1")
    }
    clickMoveBai2() {
        this.props.navigation.navigate("Bai2")
    }
    clickMoveBai3() {
        this.props.navigation.navigate("Bai3")
    }
    clickMoveBai4() {
        this.props.navigation.navigate("Bai4")
    }
    render() {
        return (
            <ImageBackground source={require('./images/bglab3.jpg')} style={{ width: '100%', height: '100%' }}>
                <View>
                    <TouchableOpacity onPress={() => { this.clickMoveBai1() }} style={styles.button}>
                        <Text style={styles.text}>Mở Bài 1 - ListView</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.clickMoveBai2() }} style={styles.button}>
                        <Text style={styles.text}>Mở Bài 2 - TextInput</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.clickMoveBai3() }} style={styles.button}>
                        <Text style={styles.text}>Mở Bài 3 - ScrollView</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.clickMoveBai4() }} style={styles.button}>
                        <Text style={styles.text}>Mở Bài 4 - Images</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

    static navigationOptions = {
        header: null,
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
    }
})
