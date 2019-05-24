import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

export default class Bai3 extends Component {
    state = {
        names: [
            { 'name': 'Tèo', 'id': 1 },
            { 'name': 'Tí', 'id': 2 },
            { 'name': 'Tuấn', 'id': 3 },
            { 'name': 'Tú', 'id': 4 },
            { 'name': 'Thu', 'id': 5 },
            { 'name': 'Trang', 'id': 6 },
            { 'name': 'Thành', 'id': 7 },
            { 'name': 'Đức', 'id': 8 },
            { 'name': 'Giang', 'id': 9 },
            { 'name': 'Phương', 'id': 10 },
            { 'name': 'Nam', 'id': 11 },
            { 'name': 'Hương', 'id': 12 },
        ]
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View key={item.id} style={styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})
