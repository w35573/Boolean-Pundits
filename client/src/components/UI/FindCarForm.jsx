import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const FindCarForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("11:00");
  const [endTime, setEndTime] = useState("14:00");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const handleChangeStartDate = (e) => {
    e.preventDefault();
    setStartDate(e.target.value);
  };

  const handleChangeEndDate = (e) => {
    e.preventDefault();
    setEndDate(e.target.value);
  };

  const handleChangeStartTime = (e) => {
    e.preventDefault();
    setStartTime(e.target.value);
  };

  const handleChangeEndTime = (e) => {
    e.preventDefault();
    setEndTime(e.target.value);
  };

  const handleChangeLocation = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="select__group">
          <select onChange={handleChangeLocation} id="location">
            <option value="0">Select Location</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            id="start-date"
            required
            className="start__date"
            onChange={handleChangeStartDate}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="start__time"
            id="start-time"
            type="time"
            onChange={handleChangeStartTime}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            id="end-date"
            required
            className="end__date"
            onChange={handleChangeEndDate}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="end__time"
            id="end-time"
            type="time"
            onChange={handleChangeEndTime}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" id="book-btn">
            <Link
              to={`/cars/${startDate}/${startTime}/${endDate}/${endTime}/${location}`}
              className="style-link"
            >
              Book An Appointment
            </Link>
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
