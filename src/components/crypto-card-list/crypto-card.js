import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

import { coinIcons } from 'utils/constants'

const CryptoCard = ({
    symbol,
    coin_name,
    price_usd,
    percent_change_24h,
    percent_change_7d,
}) => (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: coinIcons[symbol] }} />
        <Text>{symbol}</Text>
        <Text>{coin_name}</Text>
        <Text>{price_usd} $</Text>
        <Text>Chnage past 24 hours: {percent_change_24h}</Text>
        <Text>Change past 7 days: {percent_change_7d}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    image: {
        width: 40,
        height: 40,
    },
})

export default CryptoCard
