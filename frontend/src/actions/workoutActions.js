import axios from '../util/axios'
import {
    SINGLE_WORKOUT_FAIL,
    SINGLE_WORKOUT_REQUEST,
    SINGLE_WORKOUT_SUCCESS,
    ALL_WORKOUTS_FAIL,
    ALL_WORKOUTS_REQUEST,
    ALL_WORKOUTS_SUCESS,
    SINGLE_WORKOUT_RESET,
    ALL_TRAINER_WORKOUTS_REQUEST,
    ALL_TRAINER_WORKOUTS_SUCESS,
    ALL_TRAINER_WORKOUTS_FAIL
} from '../constances/workoutConstants'

export const singleWorkout = (workoutID) => async (dispatch) => {
    try {
        dispatch({
            type: SINGLE_WORKOUT_REQUEST
        })
        const { data } = await axios.get(`/workout/${workoutID}`)
        dispatch({
            type: SINGLE_WORKOUT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SINGLE_WORKOUT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })

    }

}
export const updateProductReset = () => {
    return {
        type: SINGLE_WORKOUT_RESET

    };
};
export const getAllWorkouts = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_WORKOUTS_REQUEST
        })
        const { data } = await axios.get('/workout')
        dispatch({
            type: ALL_WORKOUTS_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_WORKOUTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}



export const getAllTrainerWorkouts = (id) => async (dispatch, getState) => {

    const {
        trainerInfo: { trainerInfo }
    } = getState();
    try {
        dispatch({
            type: ALL_TRAINER_WORKOUTS_REQUEST
        })
        const { data } = await axios.get(`/workout/trainer/${trainerInfo._id}`)
        dispatch({
            type: ALL_TRAINER_WORKOUTS_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_TRAINER_WORKOUTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}