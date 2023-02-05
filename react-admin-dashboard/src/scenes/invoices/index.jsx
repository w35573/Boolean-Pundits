import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import UploadButton from "../../components/UploadButton";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [mockDataInvoices, setData] = useState([]);

  useEffect(async () => {
    await axios
      .get("/api/user/getAll")
      .then((res) => {
        console.log(res.data.users);

        let temp = [];

        res.data.users.forEach((element) => {
          temp.push({
            id: element._id,
            name: element.fname + " " + element.lname,
            email: element.email,
            age: element.age,
            phone: element.mobile,
            address: element.address1 + " " + element.address2,
            city: element.district,
            gender: element.gender,
            qualification: element.highestQualification,
            hoursCompleted: element.hoursCompleted,
          });
        });

        console.log(temp);

        setData(temp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.5,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 0.5,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "qualification",
      headerName: "Highest Qualification",
      flex: 1,
    },
    {
      field: "hoursCompleted",
      headerName: "Hours Completed",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <div className="outerBox">
        <Header title="Volunteers" subtitle="List of Volunteers Enrolled" />
        <UploadButton role={"user"} />
      </div>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
