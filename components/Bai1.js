import React, { Component } from 'react'
import { Text, View, StyleSheet, ListView } from 'react-native'

export default class Bai1 extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['A', 'B', 'C', 'D', 'E', 'F']),
        }
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={{ color: 'red', fontSize: 30, margin: 20 }}>{rowData}</Text>}
            />
        )
    }
}