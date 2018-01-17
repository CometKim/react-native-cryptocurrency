import React from 'react'
import { Text, ScrollView } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import CryptoCard from './crypto-card'

export default class CryptoCardList extends React.PureComponent {
    componentDidMount() {
        this.props.fetchCoinData()
    }

    render() {
        const { crypto } = this.props

        return (
            <ScrollView
                contentContainerStyle={{ paddingTop: 50, paddingBottom: 100 }}
            >
                {crypto.isFetching ? (
                    <Spinner
                        visible={true}
                        textContent={'Loading...'}
                        animation="fade"
                    />
                ) : (
                    crypto.data.map((coin, index) => (
                        <CryptoCard
                            key={index}
                            coin_name={coin.coin_name}
                            symbol={coin.symbol}
                            price_usd={coin.price_usd}
                            percent_change_24h={coin.percent_change_24h}
                            percent_change_7d={coin.percent_change_7d}
                        />
                    ))
                )}
            </ScrollView>
        )
    }
}
