import * as actiontypes from '../Action/Actiontypes';

const initialState = {
    user: [],
    ad: [],
    loading: false,
    error: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes.USER_DATA_BEGIN :
            return {
                ...state,
                loading: true
            }
        case actiontypes.USER_DATA_SUCCESS : 
    
            return {
                ...state,
                loading : false,
                error: false,
                user : action.user,
                ad : action.ad
                
            }
        case actiontypes.USER_DATA_FAIL :
            return {
                ...state,
                error: true
            }
        default :
        return state       
        
    }
}

export default reducer;
