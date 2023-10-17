import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";

function createData(product, stock, price, sales) {
  return { product, stock, price, sales };
}

const rows = [
  createData("Abstract 3D", "32 in stocks", "$45.99", 24),
  createData("Sorphens illustration", "32 in stocks", "$45.99", 37),
];

export default function DenseTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "20px", overflow: "scroll" }}
    >
      <Table size="small" aria-label="a dense table" mt>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "lightgrey" }}>Product Names</TableCell>
            <TableCell sx={{ color: "lightgrey" }} align="right">
              Stock&nbsp;&nbsp;
            </TableCell>
            <TableCell sx={{ color: "lightgrey" }} align="right">
              Price&nbsp;&nbsp;
            </TableCell>
            <TableCell sx={{ color: "lightgrey" }} align="right">
              Total Sales&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
                <br />
                <span>
                  <Avatar
                    variant="rounded"
                    src={
                      "https://img.freepik.com/premium-photo/abstract-background_932514-9519.jpg"
                    }
                  />
                  Lorem ipsum dolor sit, amet consectetur
                </span>
              </TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
