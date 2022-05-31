import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listprograms } from '../../actions/programActions'
import { deleteProgram } from '../../actions/AdminActions'
import HeaderAdmin from '../../components/Admin/HeaderAdmin.js'
import './ManagePrograms.css'



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


const ManagePrograms = () => {
    const { programList: { programs, loading, error } } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listprograms())
    }, [])
    const alluser = []
    const deleteHandler = async (id) => {
        dispatch(deleteProgram(id))
    }


    return (
        <>
            <HeaderAdmin />
            <Container>
                <TableContainer className='mt-5' component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Image</StyledTableCell>
                                <StyledTableCell>ProgramName</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {programs.map((item) => (
                                <StyledTableRow key={item.name}>

                                    <StyledTableCell align="center">
                                        <img width={'30%'} height={'100px'} src={item.image}></img>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{item.programname}</StyledTableCell>

                                    <StyledTableCell align="right">
                                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <Button onClick={() => deleteHandler(item._id)} color='error' variant='contained'>Delete</Button>


                                        </div>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default ManagePrograms
