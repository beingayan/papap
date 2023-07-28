import React, { useRef, useState } from 'react'


import fileToBase64 from '../utility/fileToBase';
import AvatarEditor from "react-avatar-editor";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import NoImage from "../Img/no_image.jpg"
import SelectAdvance from "react-select";

export default function EmployeeManagement() {

  const [showForm, setShowForm] = useState(true);
  const [EmployeeDetails, setEmployeeDetails] = useState([{
    firstName: "",
    lastName: "",
    Phone: "",
    Email: "",
    workHours: "",
    salaryType: "",
    salary: "",
    Department: ""
  }])
  const [proPicData, setPropicData] = useState({
    ProPic: "",
    ProPicPath: "",
    ProPicName: "",
    ShowErrProfile: "",
  })
  const [scaleImage, setScaleImage] = useState({});
  const [workHours,setWorkHours] = useState("");
  const[salaryTypeId,setSalaryTypeId] = useState("");

  const proPicRef = useRef();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // const handleFileBrowseChange = (e)=>{
  //     fileToBase64(e).then((data) => {

  //         setEmployeeDetails({
  //             profilePicture: data.file,
  //             profilePictureFileName: data.name
  //         })
  //       });
  // }

  const handleProfileChange = (e) => {

    e.persist();
    if (e.target.files.length > 0 && e.target.files[0].size <= 512000) {
      if (e.target.files[0]) {
        fileToBase64(e).then(data => {
          var CheckExt = data.name.split(".").pop();
          if (
            CheckExt.toLowerCase() === "jpeg" ||
            CheckExt.toLowerCase() === "jpg" ||
            CheckExt.toLowerCase() === "png"
          ) {
            setPropicData({
              ProPic: data.file,
              ProPicPath: data.file,
              ProPicName: data.name,
              ShowErrProfile: false,
            });
          } else {
            setPropicData({
              ShowpdfError: true,
              ProPic: "",
              ProPicPath: "",
              ProPicName: ""
            });
          }
        });
      }
    } else {

      NotificationManager.warning("File size should not be more than 512KB");
    }
  }


  const handleSalaryType=(selectedOption)=>{
    if(!selectedOption){
      setSalaryTypeId("")
    }else{
      setSalaryTypeId(selectedOption.value)
    }
  }

  const clearAll = ()=>{

    setShowForm(false)
  }

  return (
    <div>

      <div className='page-head-title'>
      <span className={!showForm ? "head-title-text":"head-title-text-onClose"} >
        Employee List{" "}
        
      </span>

      {!showForm && <button
          type="submit"
          className="btn btn-success btn-small addnew_btn"
          onClick={() => setShowForm(true)}
        >
          <i className="fa fa-plus">&nbsp;</i> Add New Employee
        </button>}

        </div>

      {showForm &&


        (
          <form >
            <div className="row form_cover">

            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group profile_part">
                  {/* <label>Profile Picture</label> */}
                  

                  {proPicData.ProPicPath && (
                    <div>
                      <AvatarEditor
                        image={proPicData.ProPicPath || NoImage}
                        width={160}
                        height={160}
                        border={0}
                        color={[255, 255, 255, 0.6]} // RGBA
                        scale={scaleImage}
                        rotate={0}
                      />
                      <div className="photoslidecontainer">
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={scaleImage}
                          onChange={e => {
                            setScaleImage(
                              e.target.value
                            );
                          }}
                          className="photoslider"
                          id="myRange"
                        />
                      </div>
                    </div>
                  )}

                  {!proPicData.ProPicPath && (
                    <img
                      src={

                        NoImage
                      }
                      alt="profile"
                      style={{ margin: '3px' }}
                    />
                  )}

                  <center>
                    <div className="upload-btn-wrapper">
                      <button className="btn">Upload Profile </button>
                      <input
                        type="file"
                        name="ProPicPath"
                        className="form-control-file"
                        id="ProPicPath"
                        aria-describedby="fileHelp"
                        accept="image/x-png,image/gif,image/jpeg"
                        onChange={handleProfileChange}

                        label="ProPicPath"

                      />
                      {proPicData.ShowErrProfile && (
                        <span className="require_field">
                          ProfilePicture is Required
                        </span>
                      )}

                    </div>
                  </center>
                  <span style={{ color: 'red', fontSize: '9px', fontWeight: 'bold',position:'relative',top:"49px" }}>
                    File size should not be more than 512KB
                  </span>

                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label className="required">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={EmployeeDetails.firstName}

                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label className="required">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={EmployeeDetails.lastName}

                    onChange={handleChange}
                  />
                </div>
              </div>



              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Phone"
                    name="Phone"
                    value={EmployeeDetails.Phone}
                    onChange={handleChange}

                  />
                </div>
              </div>



              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"

                    onChange={handleChange}
                  />
                </div>
              </div>


              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label>Work Hours</label>
                  <input
                    type="number"
                    className="form-control"
                    id="workHours"
                    name="workHours"
                    value={workHours}
                    onChange={(e)=>setWorkHours(e.target.value)}
                    autoComplete="off"
                  onKeyDown={(e) => {
                    var invalidChars = ["-", "+", "e"];
                    if (invalidChars.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}

                  />
                </div>
              </div>

{console.log("state",EmployeeDetails)}


<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label className="required">Salary Type</label>
                      <SelectAdvance
                        onChange={handleSalaryType}
                        id="salaryTypeId"
                        name="salaryTypeId"
                        value={salaryTypeId}
                        label="Salary Type"
                        // options={_.uniqBy(
                        //   this.props.countryStateCity,
                        //   "CountryId"
                        // ).map(item => {
                        //   return {
                        //     value: item.CountryId,
                        //     label: item.Country
                        //   };
                        // })}
                      />
                     
                    </div>
                  </div>






             









              <div  style={{float:'right',margin:'103px 16px 4px 17px'}}>
                <button type="submit" className="btn btn-success " style={{margin:'5px'}}>
                  <i className="fa fa-save">&nbsp;</i> Save
                </button>


                <button
                  type="button"
                  onClick={clearAll}
                  className="btn btn-danger "
                >
                  <i className="fa fa-times">&nbsp;</i>
                  Cancel
                </button>

              </div>
            </div>
          </form>
        )

      }


      <NotificationContainer />
    </div>
  )
}
