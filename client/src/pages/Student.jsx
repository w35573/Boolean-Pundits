import { React, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import "../styles/student.css";
const Student = () => {
  const { user } = useAuthContext();
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolAdd, setSchoolAdd] = useState("");
  const [standard, setStandard] = useState("");
  const [Q1, setQ1] = useState("1");
  const [Q2, setQ2] = useState("1");
  const [Q3, setQ3] = useState("1");

  const handleChangeFName = (e) => {
    e.preventDefault();
    setFName(e.target.value);
  };
  const handleChangeMName = (e) => {
    e.preventDefault();
    setMName(e.target.value);
  };
  const handleChangeLName = (e) => {
    e.preventDefault();
    setLName(e.target.value);
  };
  const handleChangeAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };
  const handleChangeGender = (e) => {
    e.preventDefault();
    setGender(e.target.value);
  };
  const handleChangeMobile = (e) => {
    e.preventDefault();
    setMobile(e.target.value);
  };

  const handleChangeCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };
  const handleChangeState = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };
  const handleChangeDistrict = (e) => {
    e.preventDefault();
    setDistrict(e.target.value);
  };
  const handleChangeAddress1 = (e) => {
    e.preventDefault();
    setAddress1(e.target.value);
  };
  const handleChangeAddress2 = (e) => {
    e.preventDefault();
    setAddress2(e.target.value);
  };

  const handleChangeSchoolAdd = (e) => {
    e.preventDefault();
    setSchoolAdd(e.target.value);
  };

  const handleChangeQ1 = (e) => {
    e.preventDefault();
    setQ1(e.target.value);
  };
  const handleChangeQ2 = (e) => {
    e.preventDefault();
    setQ2(e.target.value);
  };
  const handleChangeQ3 = (e) => {
    e.preventDefault();
    setQ3(e.target.value);
  };
  const handleChangeSchool = (e) => {
    e.preventDefault();
    setSchoolName(e.target.value);
  };
  const handleChangeStandard = (e) => {
    e.preventDefault();
    setStandard(e.target.value);
  };

  return (
    <div class="student-section-container">
      <div class="student-form-container">
        <div class="stud-form-header">Enroll as a student</div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputFName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="inputFName"
                placeholder=""
                onChange={handleChangeFName}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputMName">Middle Name</label>
              <input
                type="text"
                class="form-control"
                id="inputMName"
                placeholder=""
                onChange={handleChangeMName}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputLName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="inputLName"
                placeholder=""
                onChange={handleChangeLName}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCountry">Country</label>
              <input
                type="text"
                class="form-control"
                id="inputCountry"
                onChange={handleChangeCountry}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <input
                type="text"
                class="form-control"
                id="inputState"
                onChange={handleChangeState}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputDistrict">District</label>
              <input
                type="text"
                class="form-control"
                id="inputDistrict"
                onChange={handleChangeDistrict}
              ></input>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address 1</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              onChange={handleChangeAddress1}
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              onChange={handleChangeAddress2}
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputAge">Age</label>
              <input
                type="Number"
                class="form-control"
                id="inputAge"
                onChange={handleChangeAge}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputGender">Gender</label>
              <input
                type="text"
                class="form-control"
                id="inputGender"
                onChange={handleChangeGender}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputPhone">Phone</label>
              <input
                type="text"
                class="form-control"
                id="inputPhone"
                onChange={handleChangeMobile}
              ></input>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputSchoolName">School Name</label>
              <input
                type="text"
                class="form-control"
                id="inputSchoolName"
                onChange={handleChangeSchool}
              />
            </div>

            <div class="form-group col-md-4">
              <label for="inputSchoolAdd">School Address</label>
              <input
                type="text"
                class="form-control"
                id="inputSchoolAdd"
                onChange={handleChangeSchoolAdd}
              />
            </div>

            <div class="form-group col-md-4">
              <label for="inputStandard">Standard</label>
              <input
                type="text"
                class="form-control"
                id="inputStandard"
                onChange={handleChangeStandard}
              />
            </div>
          </div>

          <div class="stud-question-container">
            <div class="stud-form-header">Questionnaire</div>

            <div class="stud-form-question-tabs">
              <div class="stud-question-tab">
                <div class="stud-question px-0">
                  Question 1: You are curious about technical related stuff?
                </div>

                <select onChange={handleChangeQ1} value={Q1}>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div class="stud-question-tab px-0">
                <div class="stud-question">
                  Question 2: You often feel better after working for people
                  selflessly
                </div>
                <select onChange={handleChangeQ2} value={Q2}>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div class="stud-question-tab px-0">
                <div class="stud-question">
                  Question 3: You like to learn about nature's creations?
                </div>
                <select onChange={handleChangeQ3} value={Q3}>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
            </div>
          </div>

          <button
            class="btn btn-primary stud-form-btn"
            onClick={async () => {
              await axios
                .patch("/api/student/update", {
                  q1: Q1,
                  q2: Q2,
                  q3: Q3,
                  email: user && user.email,
                  fName: fName,
                  mName: mName,
                  lName: lName,
                  age: age,
                  gender: gender,
                  mobile: mobile,
                  schoolName: schoolName,
                  standard: standard,
                  schoolAddress: schoolAdd,
                  country: country,
                  state: state,
                  district: district,
                  address1: address1,
                  address2: address2,
                })
                .then((response) => response.data)
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => {
                  console.log(err.message);
                });
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Student;
