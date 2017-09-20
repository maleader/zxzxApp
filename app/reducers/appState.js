import * as appStateTypes from '../constants/appState'

const initailState = {
    fetching:false
}

export default function (state = initailState,action) {
    switch (action.type) {
        case appStateTypes.FETCHING:
            return action.payload
            break;
        default:
            return state
    }
}