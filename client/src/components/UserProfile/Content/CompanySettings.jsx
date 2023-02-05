import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function CompanySettings() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [entryTime, setEntryTime] = useState("");
  const [exitTime, setExitTime] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const handleEntry = (e) => {
    e.preventDefault();

    setEntryTime(e.target.value);
  };

  const handleExit = (e) => {
    e.preventDefault();

    setExitTime(e.target.value);
  };

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
    >
      <FormControl id="companyId">
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftAddon color="gray.500">
            <svg width="1em" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            </svg>
          </InputLeftAddon>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder="xyz@gmail.com"
            onChange={handleEmailChange}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="companyName">
        <FormLabel>Name</FormLabel>

        <InputGroup>
          <InputLeftAddon color="gray.500">
            <svg width="1em" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            </svg>
          </InputLeftAddon>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder="John Doe"
            onChange={handleNameChange}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="startTime">
        <FormLabel>Entry Time</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="datetime-local"
          placeholder="info@apple.com"
          onChange={handleEntry}
        />
      </FormControl>
      <FormControl id="endTime">
        <FormLabel>Exit Time</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="datetime-local"
          placeholder="info@apple.com"
          onChange={handleExit}
        />
      </FormControl>

      <FormControl id="submitBtn">
        <Button colorScheme="blue">Register Attendance</Button>
      </FormControl>
    </Grid>
  );
}

export default CompanySettings;
