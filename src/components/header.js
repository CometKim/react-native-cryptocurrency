import React from 'react'
import styled from 'styled-components/native';

export default () => (
    <Container>
        <Title>Cryptocurrency Tracker</Title>
    </Container>
)

const Container = styled.View`
    display: flex;
    margin-top: 50;
    align-items: center;
`

const Title = styled.Text`
    font-weight: bold;
    font-size: 20;
`
