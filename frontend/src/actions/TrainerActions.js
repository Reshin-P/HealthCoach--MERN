import axios from "../util/axios";
import {
    USER_WORKOUT_REQUEST,
    USER_WORKOUT_SUCCESS,
    USER_WORKOUT_FAIL,
    TRAINER_LOGIN_REQUEST,
    TRAINER_LOGIN_SUCCESS,
    TRAINER_LOGIN_FAIL,
    TRAINER_LOGOUT,
    TRAINER_VERYFY,
    TRAINER_PROFILE_PHOTO_SUCCESS,
    TRAINER_PROFILE_PHOTO_REQUEST,
    TRAINER_PROFILE_PHOTO_FAIL,
    TRAINER_PROFIE_UPDATE_REQUEST,
    TRAINER_PROFILE_UPDATE_SUCCESS,
    SUBCRIBED_USERS_REQUEST,
    SUBCRIBED_USERS_SUCCESS,
    SUBCRIBED_USERS_FAIL,
    SINGLE_TRAINER_REQUEST,
    SINGLE_TRAINER_SUCCESS,
    SINGLE_TRAINER_FAIL,
    TRAIENR_WORKOUTS_REQUEST,
    TRAIENR_WORKOUTS_SUCCESS
} from '../constances/TrainerReduxConstants.js'

//FOR LOGIN TRAINER

export const trainerLoginAction = (username, password) => async (dispatch) => {

    dispatch({ type: TRAINER_LOGIN_REQUEST })
    try {
        const { data } = await axios.post('/trainers/trainerlogin', { username, password })
        localStorage.setItem('trainer', JSON.stringify(data))
        dispatch({
            type: TRAINER_LOGIN_SUCCESS,
            payload: data
        })
        dispatch({
            type: TRAINER_VERYFY,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRAINER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}





//TO GET USER WORKOUTS
export const getUserWorkouts = (id) => async (dispatch) => {
    dispatch({
        type: USER_WORKOUT_REQUEST
    })
    let trainerInfo = localStorage.getItem('trainer')
    trainerInfo = JSON.parse(trainerInfo)
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${trainerInfo.token}`
            }
        }
        const { data } = await axios.get(`/trainers/userworkouts/${id}`, config)
        dispatch({
            type: USER_WORKOUT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_WORKOUT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

//To logot trainer

export const LogoutTrainer = () => async (dispatch) => {

    localStorage.removeItem("trainer")
    dispatch({
        type: TRAINER_LOGOUT
    })
}



//To upoad profile photo

export const uploadProfilePhoto = (formData) => async (dispatch, getState) => {
    const {
        trainerInfo: { trainerInfo }
    } = getState();


    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${trainerInfo.token}`,
        },
    };
    dispatch({
        type: TRAINER_PROFILE_PHOTO_REQUEST
    })
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${trainerInfo.token}`,
            }
        }
        const { data } = await axios.patch('/trainers/profilephoto', formData, config)

        localStorage.setItem('trainer', JSON.stringify(data))
        dispatch({
            type: TRAINER_PROFILE_PHOTO_SUCCESS,
            payload: data
        })
        dispatch({
            type: TRAINER_LOGIN_SUCCESS,
            payload: data
        })
        dispatch({
            type: TRAINER_VERYFY,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRAINER_PROFILE_PHOTO_FAIL,
            payload: error.response && error.response.data.message
                ? error.data.message
                : error.message
        })
    }
}


//To update trainer profile

export const updateProfile = (detail) => async (dispatch, getState) => {
    dispatch({
        type: TRAINER_PROFIE_UPDATE_REQUEST
    })
    const {
        trainerInfo: { trainerInfo }
    } = getState();


    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${trainerInfo.token}`,
        },
    };

    try {
        const { data } = await axios.put(`/trainers/${trainerInfo._id}`, detail, config)
        await localStorage.setItem('trainer', JSON.stringify(data))
        dispatch({
            type: TRAINER_PROFILE_UPDATE_SUCCESS,
            payload: data
        })
        dispatch({
            type: TRAINER_VERYFY,
            payload: data
        })
    } catch (error) {

    }


}


//TO GET SUBCRIBED USERS LIST

export const getSubcribedUsers = (tranerId) => async (dispatch, getState) => {

    dispatch({
        type: SUBCRIBED_USERS_REQUEST
    })
    const {
        trainerInfo: { trainerInfo }
    } = getState();


    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${trainerInfo.token}`,
        },
    };
    try {

        const { data } = await axios.get(`/trainers/getusers/${tranerId}`, config)
        dispatch({
            type: SUBCRIBED_USERS_SUCCESS,
            payload: data
        })
    } catch (error) {

        dispatch({
            type: SUBCRIBED_USERS_FAIL,
            payload: error.response && error.response.data.message
                ? error.data.message
                : error.message
        })

    }

}

//  SINGLE USER ACTIONS

export const getSingleTrainer = (trainerId) => async (dispatch) => {


    dispatch({
        type: SINGLE_TRAINER_REQUEST
    })
    try {
        const { data } = await axios.get(`/trainers/${trainerId}`)
        dispatch({
            type: SINGLE_TRAINER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SINGLE_TRAINER_FAIL,
            payload: error.response && error.response.data.message
                ? error.data.message
                : error.message
        })
    }
}


//TRAIENR WORKOUTS

export const getTrainerWorkouts = (trainerID) => async (dispatch) => {
    dispatch({
        type: TRAIENR_WORKOUTS_REQUEST
    })
    try {

        const { data } = await axios.get(`workout/trainer/${trainerID}`)
        dispatch({
            type: TRAIENR_WORKOUTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SINGLE_TRAINER_FAIL,
            payload: error.response && error.response.data.message
                ? error.data.message
                : error.message
        })

    }
}