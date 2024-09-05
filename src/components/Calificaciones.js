import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Estilos personalizados para la tabla
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: '12px',
    padding: '4px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '12px',
    padding: '4px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  height: '45px',
}));

function ListaDeUsuarios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "GET",
          baseURL: 'http://localhost:8080',
          url: '/calificaciones',
          params: {
            strEmail: "josoriob@choucairtesting.com",
            strPensum: "Pensum Operación"

          },
        });

        setData(response.data.data); // Guarda el resultado en el estado `data`
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);


      return (
        <TableContainer component={Paper} style={{ width: '60%', maxHeight: '70%' }}>
          <Table sx={{ width: '100%' }} aria-label="customized table">
            <TableHead style={{"Position": "fixed"}}>
              <TableRow>
                <StyledTableCell>Curso</StyledTableCell>
                <StyledTableCell align="right">Resultado</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((nota_curso, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {nota_curso.strCurso}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {nota_curso.Resultado}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default ListaDeUsuarios;
