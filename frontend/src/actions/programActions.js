import { PROGRAM_LIST_REQUEST, PROGRAM_SUCESS, PROGRAM_LIST_FAIL } from '../constances/programConstants'
import axios from '../util/axios.js'


//To List All Programs
export const listprograms = () => async (dispatch) => {

    try {
        dispatch({ type: PROGRAM_LIST_REQUEST })
        const { data } = await axios.get('/program')
        dispatch({
            type: PROGRAM_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROGRAM_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}