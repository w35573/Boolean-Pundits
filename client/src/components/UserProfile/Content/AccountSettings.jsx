import { FormControl, FormLabel, Grid, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

function AccountSettings() {
  const [data, setUser] = useState([]);

  const { user } = useAuthContext();

  useEffect(async () => {
    console.log(user);

    await axios
      .get(`/api/student/get/${user.email}`)
      .then((res) => {
        console.log(res.data.student);
        setUser(res.data.student);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={data.fName}
        />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={data.lName}
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder={data.mobile}
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder={user.email}
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={data.district}
        />
      </FormControl>
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={data.country}
        />
      </FormControl>
    </Grid>
  );
}

export default AccountSettings;
