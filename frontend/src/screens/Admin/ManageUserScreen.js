
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/AdminActions.js';
import HeaderAdmin from '../../components/Admin/HeaderAdmin';
import { blockUnblockUsers } from '../../actions/AdminActions.js'



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

const columns = [


    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {


    const density = population / size;
    return { name, code, population, size, density };
}



export default function ManageUserScreen() {
    const { allusers: { alluser } } = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const blockHandler = async (id) => {
        dispatch(blockUnblockUsers(id, "block"))
    }

    const unblockHandler = async (id) => {
        dispatch(blockUnblockUsers(id, "unblock"))
    }

    return (
        <>
            <HeaderAdmin />
            <h1 style={{ textAlign: 'center', marginTop: "50px", fontFamily: 'sans-serif' }}>Manage Trainer</h1>
            <Container>
                <TableContainer className='mt-5' component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Workout</StyledTableCell>
                                <StyledTableCell align="right">Email</StyledTableCell>
                                <StyledTableCell align="right">Mob No</StyledTableCell>
                                <StyledTableCell align="right">Height</StyledTableCell>
                                <StyledTableCell align="right">Weight</StyledTableCell>
                                <StyledTableCell align="right">Actions</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {alluser.map((item) => (
                                <StyledTableRow key={item.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {item.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{item.email}</StyledTableCell>
                                    <StyledTableCell align="right">{item.phone}</StyledTableCell>
                                    <StyledTableCell align="right">{item.height}</StyledTableCell>
                                    <StyledTableCell align="right">{item.weight}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            {item.isBlocked ? <Button onClick={() => unblockHandler(item._id)} color='warning' variant='contained'>UnBlock</Button>
                                                : <Button onClick={() => blockHandler(item._id)} color='error' variant='contained'>Block</Button>
                                            }
                                            <Link to={`/viewuser/${item._id}`}><Button variant='contained'>View</Button></Link>
                                        </div>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}