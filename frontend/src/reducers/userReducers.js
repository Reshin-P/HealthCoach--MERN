import {
    USER_VERYFY,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCESS,
    USER_UPDATE_FAIL,
    USER_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_WEIGHT_UPDATE_REQUEST,
    USER_WEIGHT_UPDATE_SUCESS,
    USER_WEIGHT_UPDATE_FAIL,
    USER_SUBCRIBED_WORKOUT_SUCCESS,
    USER_SUBCRIBED_WORKOUT_REQUEST,
    USER_SUBCRIBED_WORKOUT_FAIL,
    USER_PROFILE_PHOTO_REQUEST,
    USER_PROFILE_PHOTO_SUCESS,

    USER_PROFILE_PHOTO_FAIL,
    BANNER_REQUEST,
    BANNER_SUCCESS,
    BANNER_FAIL
} from '../constances/UserConstants'



let data = localStorage.getItem('userInfo')
data = JSON.parse(data)
if (data) {
    data = data

} else {

    data = null
}


// To Veryfy the user

export const veryuserReducer = (state = { userInfo: data }, action) => {

    switch (action.type) {
        case USER_VERYFY:
            return { ...state, userInfo: action.payload }
        case USER_LOGOUT:
            return { logouted: true }
        default: return state

    }
}

//To Add User Weight

export const userWeightUpdate = (state = { weight: {} }, { type, payload }) => {

    switch (type) {
        case USER_WEIGHT_UPDATE_REQUEST:
            return { ...state, loading: true }
        case USER_WEIGHT_UPDATE_SUCESS:
            return { ...state, loading: false, Weightsuccess: true, userdata: payload }
        case USER_WEIGHT_UPDATE_FAIL:
            return { ...state.weight, loading: false, error: payload }
        default: return state

    }
}


//To Edit User Profile 

export const userprofileEditReducer = (state = { user: {} }, { type, payload }) => {

    switch (type) {
        case USER_UPDATE_REQUEST:
            return { ...state, loading: true }
        case USER_UPDATE_SUCESS:
            return { ...state, loading: false, success: true, user: payload }
        case USER_UPDATE_FAIL:
            return { ...state, loading: false, error: payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

//To User Login Check

export const LoginCheckReducer = (state = { userInfo: {} }, { type, payload }) => {

    switch (type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true }
        case USER_LOGIN_SUCCESS:
            return { ...state, sucess: true, loading: false, loginUser: payload }
        case USER_LOGIN_FAIL:
            return { ...state, loading: false, error: payload }
        case USER_LOGOUT:
            return {}
        default: return state
    }
}

// To Get All subcribes workouts

export const subcribeWorkouts = (state = { subcribedworkouts: [] }, { type, payload }) => {
    switch (type) {
        case USER_SUBCRIBED_WORKOUT_REQUEST:
            return { ...state, loading: true }
        case USER_SUBCRIBED_WORKOUT_SUCCESS:
            return { ...state, loading: false, subcribedworkouts: payload }
        case USER_SUBCRIBED_WORKOUT_FAIL:
            return { ...state, loading: false, error: payload }

        default:
            return state
    }
}

//To upload profile photo


export const uploadProfilePhoto = (state = { userprofilePhoto: {} }, { type, payload }) => {
    switch (type) {
        case USER_PROFILE_PHOTO_REQUEST:
            return { ...state, loadingphoto: true }
        case USER_PROFILE_PHOTO_SUCESS:
            return { ...state, loadingphoto: false, photosucess: true, photo: payload }
        case USER_PROFILE_PHOTO_FAIL:
            return { ...state, loadingphoto: false, error: payload }

        default:
            return state
    }

}

//TO GET BANNER

export const getBanner = (state = { Banner: {} }, { type, payload }) => {
    switch (type) {
        case BANNER_REQUEST:
            return { ...state, bannerLoading: true }
        case BANNER_SUCCESS:
            return { ...state, bannerLoading: false, Banner: payload }
        case BANNER_FAIL:
            return { ...state, bannerLoading: false, bannerError: payload }
        default:
            return state
    }
}