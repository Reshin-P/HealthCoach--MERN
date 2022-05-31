import {
    USER_WORKOUT_REQUEST,
    USER_WORKOUT_SUCCESS,
    USER_WORKOUT_FAIL,
    USER_WORKOUT_NULL,
    TRAINER_VERYFY,
    TRAINER_LOGIN_REQUEST,
    TRAINER_LOGIN_SUCCESS,
    TRAINER_LOGIN_FAIL,
    TRAINER_LOGOUT,
    TRAINER_PROFILE_PHOTO_REQUEST,
    TRAINER_PROFILE_PHOTO_SUCCESS,
    TRAINER_PROFILE_PHOTO_FAIL,
    TRAINER_PROFIE_UPDATE_REQUEST,
    TRAINER_PROFILE_UPDATE_SUCCESS,
    TRAINER_PROFILE_UPDATE_FAIL,
    SUBCRIBED_USERS_REQUEST,
    SUBCRIBED_USERS_SUCCESS,
    SUBCRIBED_USERS_FAIL,
    SINGLE_TRAINER_REQUEST,
    SINGLE_TRAINER_SUCCESS,
    SINGLE_TRAINER_FAIL,
    TRAIENR_WORKOUTS_REQUEST,
    TRAIENR_WORKOUTS_SUCCESS,
    TRAIENR_WORKOUT_FAIL
} from '../constances/TrainerReduxConstants'

// TO GET USER WORKOUTS

export const UserWorkouts = (state = { userWorkouts: [] }, { type, payload }) => {
    switch (type) {
        case USER_WORKOUT_REQUEST:
            return { ...state, loading: true }
        case USER_WORKOUT_SUCCESS:
            return { ...state, loading: false, userWorkouts: payload }
        case USER_WORKOUT_FAIL:
            return { ...state, loading: false, error: payload }
        case USER_WORKOUT_NULL:
            return {}
        default:
            return state

    }
}


let data = localStorage.getItem('trainer')
data = JSON.parse(data)
if (data) {
    data = data

} else {
    data = null
}


// To Veryfy the TRAINER

export const verytrainerReducer = (state = { trainerInfo: data }, action) => {

    switch (action.type) {
        case TRAINER_VERYFY:
            return { ...state, trainerInfo: action.payload }
        default: return state

    }
}


//TO TRAINER LOGIN

export const trainerLoginReducer = (state = { trainerLogin: {} }, { type, payload }) => {
    switch (type) {
        case TRAINER_LOGIN_REQUEST:
            return { ...state, loading: true, sucess: false }
        case TRAINER_LOGIN_SUCCESS:
            return { ...state, loading: false, sucess: true, trainerLogin: payload }
        case TRAINER_LOGIN_FAIL:
            return { ...state, loading: false, error: payload }
        case TRAINER_LOGOUT:
        default:
            return state
    }
}

//To upload profile photo


export const uploadTrainerProfilePhoto = (state = { trainerprofilePhoto: {} }, { type, payload }) => {
    switch (type) {
        case TRAINER_PROFILE_PHOTO_REQUEST:
            return { ...state, loadingphoto: true }
        case TRAINER_PROFILE_PHOTO_SUCCESS:
            return { ...state, loadingphoto: false, photosuCcess: true, photo: payload }
        case TRAINER_PROFILE_PHOTO_FAIL:
            return { ...state, loadingphoto: false, error: payload }
        case TRAINER_LOGOUT:
            return {}
        default:
            return state
    }

}


//To update Trainer profile

export const updateProfile = (state = { profileupdate: {} }, { type, payload }) => {
    switch (type) {
        case TRAINER_PROFIE_UPDATE_REQUEST:
            return { ...state, loading: true }
        case TRAINER_PROFILE_UPDATE_SUCCESS:
            return { ...state, loading: false, suCcess: true, profileupdate: payload }
        case TRAINER_PROFILE_UPDATE_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }


}

//TO GET THE SUBCRIBED  USERS FOR THE TRAINER HOME PAGE


export const getSubcribedUsers = (state = { userList: [] }, { type, payload }) => {
    switch (type) {
        case SUBCRIBED_USERS_REQUEST:
            return { ...state, loading: true }
        case SUBCRIBED_USERS_SUCCESS:
            return { ...state, loading: false, userList: payload }
        case SUBCRIBED_USERS_FAIL:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}

// TO GET SINGLE  TRAIENR

export const SingleTrainer = (state = { singleTrainer: {} }, { type, payload }) => {
    switch (type) {
        case SINGLE_TRAINER_REQUEST:
            return { ...state, loading: true }
        case SINGLE_TRAINER_SUCCESS:
            return { ...state, loading: false, singleTrainer: payload }
        case SINGLE_TRAINER_FAIL:
            return { ...state, loading: false }
        default:
            return state
    }

}

//TO GET WORKOUTS UPLODED BY THE SINGLE TRAINER

export const trainerWorkoutReducer = (state = { trainerWorkouts: [] }, { type, payload }) => {
    switch (type) {
        case TRAIENR_WORKOUTS_REQUEST:
            return { ...state, workoutLoading: true }
        case TRAIENR_WORKOUTS_SUCCESS:
            return { ...state, workoutLoading: false, trainerWorkouts: payload }
        case TRAIENR_WORKOUT_FAIL:
            return { ...state, errors: payload }
        default:
            return state
    }
}