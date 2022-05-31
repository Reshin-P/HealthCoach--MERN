import axios from '../util/axios'
import { listprograms } from '../actions/programActions';
import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_WORKOUTS_REQUEST,
    ADMIN_WORKOUT_SUCCESS,
    ADMIN_WORKOUTS_FAIL,
    WORKOUT_BLOCK_UNBLOCK_REQUEST,
    WORKOUT_BLOCK_UNBLOCK_SUCCESS,
    WORKOUT_BLOCK_UNBLOCK_FAIL,
    ALL_TRAINERS_REQUEST,
    ALL_TRAINERS_SUCCESS,
    ALL_TRAINERS_FAIL,
    TRAINER_BLOCK_UNBLOCK_REQUEST,
    TRAINER_BLOCK_UNBLOCK_SUCCESS,
    TRAINER_BLOCK_UNBLOCK_FAIL,
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAIL,
    USER_BLOCK_REQUEST,
    USER_BLOCK_SUCCESS,
    USER_BLOCK_FAIL,
    TRAINER_SIGNUP_ACCEPT_REQUEST,
    TRAINER_SIGNUP_ACCEPT_SUCCESS,
    TRAINER_SIGNUP_ACCEPT_FAIL,
    TRAINER_ACCEPT_REQUEST,
    TRAINER_ACCEPT_SUCCESS,
    TRAINER_ACCEPT_FAIL,
    ADD_PROGRAM_REQUEST,
    ADMIN_VERYFY,
    ADMIN_LOGOUT,
    ADD_PROGRAM_SUCESS,
    DELETE_PROGRAM_REQUEST,
    DELETE_PROGRAM_SUCCESS,
    DELETE_PROGRAM_FAIL,
    ADD_BANNER_REQUEST,
    ADD_BANNER_SUCESS,
    ADD_BANNER_FAIL
}
    from '../constances/AdminConstants'
import { ALL_WORKOUTS_SUCESS } from '../constances/workoutConstants'
import { PROGRAM_SUCESS } from '../constances/programConstants'

// Admin Login Form
export const AdminLoginForm = (details) => async (dispatch) => {
    dispatch({
        type: ADMIN_LOGIN_REQUEST
    })
    try {
        const { data } = await axios.post('/admin', details)
        localStorage.setItem("admin", JSON.stringify(data))
        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data
        })
        dispatch({
            type: ADMIN_VERYFY,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}



//To Get All Workouts

export const getAllWorkoutsAdmin = () => async (dispatch) => {
    dispatch({
        type: ADMIN_WORKOUTS_REQUEST
    })
    try {
        const { data } = await axios.get('/workout')
        dispatch({
            type: ADMIN_WORKOUT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_WORKOUTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


//To Block workout


export const blockUnblockWorkout = (id, value) => async (dispatch, getState) => {
    const details = { id, value }
    dispatch({
        type: WORKOUT_BLOCK_UNBLOCK_REQUEST
    })
    const { getAllWorkouts: { allWorkouts } } = getState()
    try {
        const { data } = await axios.patch(`/workout/${id}`, details)
        dispatch({
            type: WORKOUT_BLOCK_UNBLOCK_SUCCESS,
            payload: data
        })

        dispatch({
            type: ALL_WORKOUTS_SUCESS,
            payload: allWorkouts.filter((data) => {
                if (data._id === id) {
                    data.isBlocked = !data.isBlocked
                }
                return data
            })
        })
    } catch (error) {
        dispatch({
            type: WORKOUT_BLOCK_UNBLOCK_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

// To Get All Trainers

export const getAllTrainers = () => async (dispatch) => {
    dispatch({
        type: ALL_TRAINERS_REQUEST
    })
    try {
        const { data } = await axios.get('/trainers')


        dispatch({
            type: ALL_TRAINERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_TRAINERS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}

//To Block Unblock Trainers

export const blockUnblockTrainers = (id, value) => async (dispatch, getState) => {

    const { adminVerify: { adminInfo } } = getState();
    const { getAlltrainers: { trainers } } = getState()

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminInfo.token}`,
        },
    }
    const details = { value }

    dispatch({
        type: TRAINER_BLOCK_UNBLOCK_REQUEST
    })
    dispatch({
        type: ALL_TRAINERS_SUCCESS,
        payload: trainers.filter((data) => {
            if (data._id === id) {
                data.isBlocked = !data.isBlocked
            }
            return data
        })
    })
    try {
        const { data } = await axios.post(`/admin/trainer/${id}`, details, config)
        dispatch({
            type: TRAINER_BLOCK_UNBLOCK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRAINER_BLOCK_UNBLOCK_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

// To Get All Users

export const getAllUsers = () => async (dispatch, getState) => {
    const { adminVerify: { adminInfo } } = getState();
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminInfo.token}`,
        },
    }
    dispatch({
        type: GET_ALL_USER_REQUEST
    })
    try {
        const { data } = await axios.get('/user', config)
        dispatch({
            type: GET_ALL_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_USER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


//To Block Unblock Users

export const blockUnblockUsers = (id, value) => async (dispatch, getState) => {
    const { allusers: { alluser } } = getState()
    const { adminVerify: { adminInfo } } = getState();
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminInfo.token}`,
        },
    }
    const details = { value }
    dispatch({
        type: USER_BLOCK_REQUEST
    })
    try {
        const { data } = await axios.post(`/admin/user/${id}`, details, config)
        dispatch({
            type: USER_BLOCK_SUCCESS,
            payload: data
        })
        dispatch({
            type: GET_ALL_USER_SUCCESS,
            payload: alluser.filter((data) => {
                if (data._id == id) {
                    data.isBlocked = !data.isBlocked
                }
                return data
            })
        })

    } catch (error) {
        dispatch({
            type: USER_BLOCK_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

//To Get All New Trainers

export const getAllNewTrainer = () => async (dispatch, getState) => {

    const { adminVerify: { adminInfo } } = getState();
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminInfo.token}`,
        },
    }
    dispatch({
        type: TRAINER_SIGNUP_ACCEPT_REQUEST
    })
    try {
        const { data } = await axios.get('/admin/trainers', config)
        dispatch({
            type: TRAINER_SIGNUP_ACCEPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRAINER_SIGNUP_ACCEPT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

//TO ACCEPT TRAINER SIGNUP REQUEST

export const acceptTrainers = (id) => async (dispatch, getState) => {
    const { adminVerify: { adminInfo } } = getState();
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminInfo.token}`,
        },
    }
    dispatch({
        type: TRAINER_ACCEPT_REQUEST
    })
    try {
        const { data } = await axios.patch(`/admin/accept/${id}`, { id: id }, config)
        dispatch({
            type: TRAINER_ACCEPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRAINER_ACCEPT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


//TO ADD NEW PROGRAMS

export const addProgram = (details) => async (dispatch) => {
    dispatch({
        type: ADD_PROGRAM_REQUEST
    })

    try {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.post('/program', details, config)
        dispatch({
            type: ADD_PROGRAM_SUCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRAINER_ACCEPT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

//To Logout Admin

export const logoutAdmin = () => async (dispatch) => {
    localStorage.removeItem('admin')
    dispatch({
        type: ADMIN_LOGOUT
    })
    dispatch({
        type: ADMIN_VERYFY,
        payload: null
    })
}

//TO DELETE PROGRAMS

export const deleteProgram = (id) => async (dispatch, getState) => {

    const { adminVerify: { adminInfo }, programList: { programs } } = getState();
    dispatch({
        type: DELETE_PROGRAM_REQUEST
    })


    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminInfo.token}`,
        },
    }
    try {
        const { data } = await axios.delete(`/program/${id}`, config)
        dispatch({
            type: DELETE_PROGRAM_SUCCESS,
            payload: data
        })
        dispatch({
            type: PROGRAM_SUCESS,
            payload: programs.filter(program => {
                if (program._id !== id) {
                    return program
                }
            })
        });
    } catch (error) {
        dispatch({
            type: DELETE_PROGRAM_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

// ADD BANNER

export const addBanner = (formData) => async (dispatch, getState) => {
    dispatch({
        type: ADD_BANNER_REQUEST
    })

    const { adminVerify: { adminInfo }, programList: { programs } } = getState();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminInfo.token}`,
        },
    }
    try {
        const { data } = await axios.post('/banner', formData, config)
        dispatch({
            type: ADD_BANNER_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_BANNER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}