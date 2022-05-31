import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWorkouts, getAllTrainerWorkouts } from '../../actions/workoutActions.js'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from '../../util/axios';
import { Link } from 'react-router-dom'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function ManageWorkoutTable() {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.getAllWorkouts
    })
    const allWorkout = data.allWorkouts
    const {
        allTrainerWorkouts: { trainerWorkouts } } = useSelector((state => state))



    const deleteHandler = async (id) => {
        const response = await axios.delete(`/workout/${id}`)
    }
    useEffect(() => {

        dispatch(getAllTrainerWorkouts())
    }, [])



    return (
        <TableContainer className='mt-5' component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Workout</StyledTableCell>
                        <StyledTableCell align="right">Program</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Trainer</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trainerWorkouts.map((item) => (
                        <StyledTableRow key={item.workout}>
                            <StyledTableCell component="th" scope="row">
                                {item.workout}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.program}</StyledTableCell>
                            <StyledTableCell align="right">{item.price}</StyledTableCell>
                            <StyledTableCell align="right">{item.trainer}</StyledTableCell>
                            <StyledTableCell align="right">
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <Link to={`/editWorkout/${item._id}`}> <button >
                                        <EditIcon />
                                    </button>
                                    </Link>
                                    <button onClick={() => deleteHandler(item._id)}>
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}