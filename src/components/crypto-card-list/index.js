import { connect } from 'react-redux'

import Container from './crypto-card-list'

function mapStateToProps(state) {
    return {
        crypto: state.crypto,
    }
}

export default connect(mapStateToProps)(Container)
