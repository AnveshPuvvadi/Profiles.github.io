import * as actiontypes from './Actiontypes';
import axios from 'axios';

export const userDataSuccess = (data, ad) =>{
    return {
        type: actiontypes.USER_DATA_SUCCESS,
        user: data,
        ad: ad
        
    }
};

export const userDataFail = () => {
    return {
        type: actiontypes.USER_DATA_FAIL
    }
};

export const userDataBegin = () => {
    return {
        type: actiontypes.USER_DATA_BEGIN
    }
}
export const fetchUserData = (id) => {
    return dispatch => {
        dispatch(userDataBegin());
            axios.get('https://reqres.in/api/users/'+ id)
            .then(response => {
                dispatch(userDataSuccess(response.data.data, response.data.ad));
                console.log(response.data)
        })
        .catch(error => {
            dispatch(userDataFail())
        })

    }

}