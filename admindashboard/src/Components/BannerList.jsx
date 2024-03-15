import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';
import axios from "axios";


const columns = [
  { id: 'bannertitle', label: 'Banner Title', minWidth: 170 },
  { id: 'bannerdesc', label: 'Banner Description', minWidth: 100 },
  {
    id: 'banneralt',
    label: 'Banner Alt',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'banneractive',
    label: 'Banner Active',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];



const rows = [
//   {
//     bannertitle:"hai",
//     bannerdesc:"welcome",
//     banneralt:"bannerq",
//     banneractive:1,
// },
// {
//     bannertitle:"hai",
//     bannerdesc:"welcome",
//     banneralt:"bannerq",
//     banneractive:0,
// },
 
];

export default function BannerList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [bannerData, setbannerData] = useState([])

  const callBannerData =async()=>{
   
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/home/banners");
      setbannerData(response.data)
      console.log("success");
    }
    catch(error){
      console.log(error);
    }

  }

  useEffect(()=>{
    callBannerData();
  },[])

  return (
    <Paper sx={{ width: '100%',border:"2px solid #2b2b2b",borderRadius:"8px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6}>
               <h2>Banner List</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {bannerData
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((bannerData) => {
                return (
                  <TableRow hover role="checkbox"  key={bannerData.id}>
                   <TableCell align='center'>
                    {bannerData.BANNER_TITLE}
                   </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={bannerData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}