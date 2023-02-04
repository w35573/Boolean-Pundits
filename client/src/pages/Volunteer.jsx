import {React, useState} from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/volunteer.css";
import axios from 'axios';

const Volunteer = () => {


  const [fName, setFName]=useState();
  const [mName, setMName]=useState();
  const [lName, setLName]=useState();
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const [age, setAge]=useState();
  const [gender, setGender]=useState();
  const [mobile, setMobile]=useState();
  const [address1, setAddress1]=useState();
  const [address2, setAddress2]=useState();
  const [qualification, setQualification]=useState();
  const [stream, setStream]=useState();
  const [country, setCountry]=useState();
  const [state, setState]=useState();
  const [district, setDistrict]=useState();
  const [pinCode, setPinCode]=useState();

  
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
  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleChangeCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };
  const handleChangeState = (e) => {
    e.preventDefault();
    setState(e.target.value);
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
  const handleChangeStream = (e) => {
    e.preventDefault();
    setStream(e.target.value);
  };
  const handleChangeQualification = (e) => {
    e.preventDefault();
    setQualification(e.target.value);
  };
  const handleChangePinCode = (e) => {
    e.preventDefault();
    setPinCode(e.target.value);
  };
  return (
    <div><Helmet title="Volunteer">
      <CommonSection title="Be a global change maker, The world needs you" />
      <div className="vol-form-container">
      <div class="vol-form-header">Become a volunteer at Yasham</div>
        <form class="vol-form">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange={handleChangeEmail} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password" onChange={handleChangePassword}/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputFName">First Name</label>
              <input type="text" class="form-control" id="inputFName" onChange={handleChangeFName}/>
            </div>
            <div class="form-group col-md-4">
              <label for="inputMName">Middle Name</label>
              <input type="text" class="form-control" id="inputMName" onChange={handleChangeMName}/>
            </div>
            <div class="form-group col-md-4">
              <label for="inputLName">Last Name</label>
              <input type="text" class="form-control" id="inputLName" onChange={handleChangeLName}></input>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputAge">Age</label>
              <input type="Number" class="form-control" id="inputAge" onChange={handleChangeAge}/>
            </div>
            <div class="form-group col-md-4">
              <label for="inputGender">Gender</label>
              <input type="text" class="form-control" id="inputGender" onChange={handleChangeGender}/>
            </div>
            <div class="form-group col-md-4">
              <label for="inputPhone">Phone</label>
              <input type="text" class="form-control" id="inputPhone" onChange={handleChangeMobile}></input>
            </div>
          </div>

          <div class="form-group">
            <label for="inputAddress1">Address 1</label>
            <input type="text" class="form-control" id="inputAddress1" placeholder="1234 Main St" onChange={handleChangeAddress1}/>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={handleChangeAddress2}/>
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCountry">Country</label>
              <input type="text" class="form-control" id="inputCountry" onChange={handleChangeCountry} />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <input type="text" class="form-control" id="inputState" onChange={handleChangeState} />
            </div>
            <div class="form-group col-md-4">
              <label for="inputDistrict">District</label>
              <input type="text" class="form-control" id="inputDistrict" onChange={handleChangeDistrict}></input>
            </div>
          </div>


          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputPincode" onChange={handleChangePinCode}>Pincode</label>
              <input type="text" class="form-control" id="inputPincode" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputHQual">Education Qualification</label>
              <input type="text" class="form-control" id="inputHQual" onChange={handleChangeQualification} />
              
            </div>
            <div class="form-group col-md-2">
              <label for="inputStream">Stream</label>
              <input type="text" class="form-control" id="inputStream" onChange={handleChangeStream}></input>
            </div>
          </div>
          
          <button onClick={async () => {
            

            
          axios
            .patch("/api/user/update", {  
              email: email,
              password: password,
              fname:fName,
              mname:mName,
              lname:lName,
              age:age,
              gender:gender,
              mobile:mobile,
              country:country,
              state:state,
              district:district,
              address1:address1,
              address2:address2,
              pincode:pinCode,
              highestQualification: qualification,
              stream:stream
            })
            .then((response) => response.data)
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }} class="btn btn-primary form-sign-in">Sign in</button>
        </form>
      </div>



    </Helmet>
    </div>
  )
}

export default Volunteer