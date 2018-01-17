import { connect } from 'react-redux'

import { fetchCoinData } from 'actions'

import Container from './crypto-card-list'

function mapStateToProps(state) {
    return {
        crypto: state.crypto,
    }
}

export default connect(mapStateToProps, { fetchCoinData })(Container)
