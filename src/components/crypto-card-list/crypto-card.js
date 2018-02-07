import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { coinIcons } from 'utils/constants'

export default ({
    symbol,
    price_usd,
    percent_change_24h,
    percent_change_7d,
}) => (
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
