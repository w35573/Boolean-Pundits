import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UploadButton from "../../components/UploadButton";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [mockDataContacts, setData] = useState([]);

  useEffect(async () => {
    await axios
      .get("/api/student/getAll")
      .then((res) => {
        console.log(res.data.students);

        let temp = [];

        res.data.students.forEach((element) => {
          temp.push({
            id: element._id,
            name: element.fName + " " + element.lName,
            email: element.email,
            age: element.age,
            phone: element.mobile,
            address: element.address1 + " " + element.address2,
            city: element.district,
            gender: element.gender,
            stream: element.stream,
            standard: element.standard,
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
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "gender", headerName: "Gender" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "stream",
      headerName: "Stream",
      flex: 0.5,
    },
    {
      field: "standard",
      headerName: "Standard",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <div className="outerBox">
        <Header title="Students" subtitle="List of Students Enrolled"  />
        <UploadButton role={"student"}/>
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
