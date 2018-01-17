import axios from 'axios'

import { apiBaseUrl } from 'utils/constants'

export default () => dispatch => {
    dispatch({ type: 'FETCHING_COIN_DATA' })

    return axios
        .get(`${apiBaseUrl}/v1/ticker/?limit=10`)
        .then(res => {
            dispatch({ type: 'FETCHING_COIN_DATA_SUCCESS', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'FETCHING_COIN_DATA_FAIL', payload: err.data })
        })
}
