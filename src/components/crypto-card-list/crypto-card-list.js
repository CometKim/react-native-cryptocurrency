import React from 'react'
import { Text, View } from 'react-native'

export default class CryptoListView extends React.PureComponent {
    componentDidMount() {
        this.props.fetchCoinData()
    }

    render() {
        return (
            <View>
                <Text>First Container</Text>
            </View>
        )
    }
}
