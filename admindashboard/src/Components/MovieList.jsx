import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const columns = [
  { id: 1, label: "Movie Name", minWidth: 170, align: "center" },
  {
    id: 2,
    label: "Movie Director",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: 3, label: "Movie Duration", minWidth: 100 },

  {
    id: 4,
    label: "Movie Status",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: 5,
    label: "Action",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

export default function MovieList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [movieData, setmovieData] = useState([]);

  const callMovieData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/home/movielist"
      )
 
      setmovieData(response.data.movies_list);
      
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callMovieData();
  }, []);

  return (
    <Paper
      sx={{ width: "100%", border: "2px solid #2b2b2b", borderRadius: "8px" }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={6}
                sx={{ background: "#4f4c4c", color: "#ffd200" }}
              >
                <h2>Movie List</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column, index) => {
                return(
                  <TableCell
                  key={index}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
                )
               
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {movieData.length > 0 &&
              movieData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((movieData) => {
                  return (
                    <TableRow hover role="checkbox" key={movieData.id}>
                      <TableCell align="center">
                        {movieData.MOVIE_NAME}
                      </TableCell>
                      <TableCell align="center">
                        {movieData.MOVIE_DIRECTOR_NAME}
                      </TableCell>
                      <TableCell align="center">
                        {movieData.MOVIE_RUNTIME}
                      </TableCell>
                      <TableCell align="center">
                        {movieData.MOVIE_STATUS}
                      </TableCell>
                      <TableCell align="center">
                      <BorderColorOutlinedIcon className="actionIcon"/>
                      <DeleteForeverOutlinedIcon className="actionIcon"/>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 15, 100]}
        component="div"
        count={movieData ? movieData.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
