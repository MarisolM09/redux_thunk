import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function CustomTable(props) {
  // const [selectedCar, setSelectedCar] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    setAnchorEl(null);
  };
  console.log("Look here", props.makes);
  return (
    <div>
      <h2>Count:{props.makes.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Make</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((row) => (
              <TableRow
                key={row.MakeId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.MakeId}</TableCell>
                <TableCell align="right">{row.MakeName}</TableCell>
                <TableCell align="right">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={() =>  props.deleteMake(row.MakeId)}
                  >
                    {/* <MoreVertIcon /> */}
                    Delete
                  </Button>
                  {/* <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() =>  props.deleteMake(row.MakeId)}>
                      Delete
                    </MenuItem>
                  </Menu> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
