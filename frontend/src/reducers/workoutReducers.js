import { ALL_TRAINERS_REQUEST } from '../constances/AdminConstants'
import {
    SINGLE_WORKOUT_FAIL,
    SINGLE_WORKOUT_REQUEST,
    SINGLE_WORKOUT_SUCCESS,
    ALL_WORKOUTS_REQUEST,
    ALL_WORKOUTS_FAIL,
    ALL_WORKOUTS_SUCESS,
    SINGLE_WORKOUT_RESET,
    ALL_TRAINER_WORKOUTS_REQUEST,
    ALL_TRAINER_WORKOUTS_SUCESS,
    ALL_TRAINER_WORKOUTS_FAIL
} from '../constances/workoutConstants'

export const workoutReducer = (state = { workout: {} }, action) => {
    switch (action.type) {
        case SINGLE_WORKOUT_REQUEST:
            return { ...state, loading: true }
        case SINGLE_WORKOUT_SUCCESS:
            return { ...state, loading: false, workout: action.payload }
        case SINGLE_WORKOUT_FAIL:
            return { ...state, loading: false, error: action.payload }
        case SINGLE_WORKOUT_RESET:
            return state = { workout: {} }
        default:
            return state
    }
}

export const allWorkoutsReducer = (state = { allWorkouts: [] }, action) => {

    switch (action.type) {
        case ALL_WORKOUTS_REQUEST:
            return { ...state, loading: true }
        case ALL_WORKOUTS_SUCESS:
            return { ...state, loading: false, allWorkouts: action.payload }
        case ALL_WORKOUTS_FAIL:
            return { ...state, loading: false, error: action.payload }
        default: return state
    }


}

export const TrainerAllWorkouts = (state = { trainerWorkouts: [] }, { type, payload }) => {
    switch (type) {
        case ALL_TRAINERS_REQUEST:
            return { ...state, loading: true }
        case ALL_TRAINER_WORKOUTS_SUCESS:
            return { ...state, loading: false, trainerWorkouts: payload }
        case ALL_TRAINER_WORKOUTS_FAIL:
            return { ...state, error: payload }
        default:
            return state
    }
}