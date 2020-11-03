import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TablePagination from "@material-ui/core/TablePagination";
import PropTypes from "prop-types";

// imported local files
import { ideaData as ideas } from "../doumyData";

import {
  StyledTableCell,
  StyledTableRow,
  useStyles,
  useStyles1,
} from "../Utilities/TableUtil";

//  table pagination functionality
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function IdeasList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, ideas.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer component={Paper} style={{ boxShadow: "none" }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow
            style={{
              borderRadius: "22px",
            }}
          >
            <StyledTableCell>Challenge Title</StyledTableCell>
            <StyledTableCell align="left">Idea Title</StyledTableCell>
            <StyledTableCell align="left">Workspace</StyledTableCell>
            <StyledTableCell align="left">Idea By</StyledTableCell>
            <StyledTableCell align="left">Posted On</StyledTableCell>
            <StyledTableCell align="left">Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? ideas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : ideas
          ).map((ideas) => (
            <StyledTableRow>
              <TableCell component="th" scope="row">
                {ideas.title}
              </TableCell>
              <TableCell align="left">{ideas.ideaTitle}</TableCell>
              <TableCell align="left">{ideas.workspace}</TableCell>
              <TableCell align="left">{ideas.author}</TableCell>
              <TableCell align="left">{ideas.postedOn}</TableCell>
              <TableCell align="left">{ideas.details}</TableCell>
            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <StyledTableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter style={{ paddingLeft: "30px !important" }}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[15, 30, 60, { label: "All", value: -1 }]}
              colSpan={4}
              style={{ border: "none" }}
              count={ideas.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <br />
      <br />
      <br />
    </TableContainer>
  );
}

export default IdeasList;
