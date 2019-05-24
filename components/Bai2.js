import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default class Bai2 extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Nhập Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Nhập Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={this.handlePassword}
                />
                <TouchableOpacity style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
    static navigationOptions = {
        title: 'Bài 2 - TextInput',
    }

}
const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButtonText: {
        color: 'white',

    }
})