import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubcribedUsers } from '../../actions/TrainerActions';


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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



export default function UserTableTrainerHomapage() {



    const [usersList, setUserList] = useState([])
    const [emptyUser, setEmptyUser] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {

        let trainerInfo = localStorage.getItem("trainer")
        if (trainerInfo) {
            trainerInfo = JSON.parse(trainerInfo)

            dispatch(getSubcribedUsers(trainerInfo._id))

        }

    }, [])
    // const { user: { userInfo } } = useSelector((state) => {
    //     return state
    // })

    const { subcribedUsers: { userList, loading, error } } = useSelector((state) => { return state })

    return (
        <>

            {loading ? <CircularProgress /> : <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>User Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Mob No</StyledTableCell>
                            <StyledTableCell align="right">Age</StyledTableCell>
                            <StyledTableCell align="right">View</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.user.name}
                                </StyledTableCell>
                                <StyledTableCell align="">{row.user.email}</StyledTableCell>
                                <StyledTableCell align="right">{row.user.phone}</StyledTableCell>
                                <StyledTableCell align="right">{row.user.age}</StyledTableCell>
                                <StyledTableCell align="right"><Link to={`/viewuser/${row.user._id}`}><Button>View</Button></Link></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </>
    );
}