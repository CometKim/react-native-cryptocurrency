// @flow

import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { coinIcons } from 'utils/constants'

export type CryptoCardProps = {
    symbol: $Keys<typeof coinIcons>,
    price_usd: string,
    percent_change_7d: string,
    percent_change_24h: string,
}

export default ({
    symbol,
    price_usd,
    percent_change_24h,
    percent_change_7d,
}: CryptoCardProps) => (
    <Container>
        <IconImage source={{ uri: coinIcons[symbol] }} />
        <Text>{symbol}</Text>
        <Text>$ {price_usd}</Text>
        <Text>Chnage past 24 hours: {percent_change_24h}%</Text>
        <Text>Change past 7 days: {percent_change_7d}%</Text>
    </Container>
)

const Container = styled.View`
    display: flex;
`

const IconImage = styled.Image`
    width: 40;
    height: 40;
`
