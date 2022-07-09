import React, { useEffect, useState } from 'react'
import Heading from './SubComponents/Heading'
import { Link, useHistory } from 'react-router-dom'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { getAboutDetails } from '../Apis/apis'

const ProfileEdit = () => {

    const [values, setValues] = useState({})

    const getProfileInfo = async () => {
        const res = await getAboutDetails();
        console.log(res);
        setValues(res.data);
    }

    useEffect(() => {
        getProfileInfo();

    }, [])

    console.log(values.firstname);

    const [change, setChange] = useState({
        marital: "",
        education: ""
    })

    console.log(change);


    const handleChange = (prop) => (e) => {
        setValues({
            ...values,
            [prop]: e.target.value
        })
    }


    const history = useHistory();


    const DisplayMarital = (data) => {
        if (data == "Single") {
            return (<>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.marital}
                    label="Marital Status"
                    InputLabelProps={{ shrink: true }}
                // onChange={handleMarStatus}
                >
                    <MenuItem checked value={"Single"}>Single</MenuItem>
                    <MenuItem value={"Married"}>Married</MenuItem>
                    <MenuItem value={"Divorced"}>Divorced</MenuItem>
                    <MenuItem value={"Widowed"}>Widowed</MenuItem>
                </Select>

            </>

            )
        } else if (data == "Married") {
            return (<>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.marital}
                    label="Marital Status"
                    InputLabelProps={{ shrink: true }}
                // onChange={handleMarStatus}
                >
                    <MenuItem value={"Single"}>Single</MenuItem>
                    <MenuItem checked value={"Married"}>Married</MenuItem>
                    <MenuItem value={"Divorced"}>Divorced</MenuItem>
                    <MenuItem value={"Widowed"}>Widowed</MenuItem>
                </Select>

            </>)
        } else if (data == "Divorced") {
            return (<>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.marital}
                    label="Marital Status"
                    InputLabelProps={{ shrink: true }}
                // onChange={handleMarStatus}
                >
                    <MenuItem value={"Single"}>Single</MenuItem>
                    <MenuItem value={"Married"}>Married</MenuItem>
                    <MenuItem checked value={"Divorced"}>Divorced</MenuItem>
                    <MenuItem value={"Widowed"}>Widowed</MenuItem>
                </Select>

            </>)
        } else {
            return (<>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.marital}
                    label="Marital Status"
                    InputLabelProps={{ shrink: true }}
                // onChange={handleMarStatus}
                >
                    <MenuItem value={"Single"}>Single</MenuItem>
                    <MenuItem value={"Married"}>Married</MenuItem>
                    <MenuItem value={"Divorced"}>Divorced</MenuItem>
                    <MenuItem checked value={"Widowed"}>Widowed</MenuItem>
                </Select>

            </>)
        }
    }

    const DisplayEducation = (data) => {
        if (data == "Under Graduate") {
            return (<>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.education}
                    label="Education Level"
                // onChange={handleMarStatus}
                >
                    <MenuItem checked value={"Under Graduate"}>Under Graduate</MenuItem>
                    <MenuItem value={'Bachelors Degree'}>Bachelors Degree</MenuItem>
                    <MenuItem value={"Post Graduate"}>Post Graduate</MenuItem>
                    <MenuItem value={"Associate"}>Associate</MenuItem>
                </Select>
            </>)
        } else if (data == "Bachelors Degree") {
            return (<>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.education}
                    label="Education Level"
                // onChange={handleMarStatus}
                >
                    <MenuItem  value={"Under Graduate"}>Under Graduate</MenuItem>
                    <MenuItem checked value={'Bachelors Degree'}>Bachelors Degree</MenuItem>
                    <MenuItem value={"Post Graduate"}>Post Graduate</MenuItem>
                    <MenuItem value={"Associate"}>Associate</MenuItem>
                </Select>
            </>)
        }else if(data == "Post Graduate"){
            return (<>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.education}
                    label="Education Level"
                // onChange={handleMarStatus}
                >
                    <MenuItem  value={"Under Graduate"}>Under Graduate</MenuItem>
                    <MenuItem value={'Bachelors Degree'}>Bachelors Degree</MenuItem>
                    <MenuItem checked value={"Post Graduate"}>Post Graduate</MenuItem>
                    <MenuItem value={"Associate"}>Associate</MenuItem>
                </Select>
            </>)
        }else{
            return (<>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.education}
                    label="Education Level"
                // onChange={handleMarStatus}
                >
                    <MenuItem  value={"Under Graduate"}>Under Graduate</MenuItem>
                    <MenuItem value={'Bachelors Degree'}>Bachelors Degree</MenuItem>
                    <MenuItem value={"Post Graduate"}>Post Graduate</MenuItem>
                    <MenuItem checked value={"Associate"}>Associate</MenuItem>
                </Select>
            </>)
        }
    }

    return (
        <>
            <div className="container bg-light nempMain mt-5 mb-5">
                <Heading
                    heading="Edit Employee Details  "
                />

                <div className="container mt-3 mb-3">
                    <h4> <Link onClick={() => { history.push('/viewemployee') }} className="homeBtn" > <ReplayRoundedIcon fontSize="small" />  Return </Link>  </h4>
                </div>
                <hr />
                <div className="container">


                    {/* ----------------- PERSONAL DETAILS ------------------ */}

                    <div class="tab-pane fade show active" id="edit-personal" role="tabpanel" aria-labelledby="edit-personal-tab">
                        <div className="container mt-4 mb-5 ">
                            <div className="row justify-content-center">
                                <label className="control-label d-flex text-right align-items-center col-md-2">
                                    Name:
                                </label>
                                <div className="col-md-7">
                                    <TextField inputProps={{ readOnly: true }} InputLabelProps={{ shrink: true }} variant="standard" value={values.firstname + " " + values.lastname} fullWidth label="First Name" size="small" />
                                </div>
                            </div>
                            <br />

                            <div className="row justify-content-center">
                                <label className="control-label d-flex align-items-center text-right col-md-2">
                                    Gender:
                                </label>
                                <div className="col-md-7">
                                    <FormControl>
                                        <RadioGroup
                                            inputProps={{ readOnly: true }}
                                            value={values.gender}
                                            row

                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="controlled-row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="Other" control={<Radio />} label="Other" />

                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                            <br />
                            <div className="row justify-content-center">
                                <label className="control-label d-flex align-items-center text-right col-md-2">
                                    Birthday:
                                </label>
                                <div className="col-md-7">
                                    <TextField type="date" value={values.birthday} label="Birthday" InputLabelProps={{ shrink: true }} variant="standard" fullWidth size="small" />
                                </div>
                            </div>
                            <br />

                            <div className="row justify-content-center">
                                <label className="control-label d-flex align-items-center text-right col-md-2">
                                    Email:
                                </label>
                                <div className="col-md-7">
                                    <TextField label="Email" InputLabelProps={{ shrink: true }} value={values.email} variant="standard" fullWidth size="small" />
                                </div>
                            </div>
                            <br />
                            <div className="row justify-content-center">
                                <label className="control-label d-flex align-items-center text-right col-md-2">
                                    Mobile Number:
                                </label>
                                <div className="col-md-7">
                                    <TextField label="Mobile Number" value={values.mobile} InputLabelProps={{ shrink: true }} variant="standard" fullWidth size="small" />
                                </div>
                            </div>
                            <br />
                            <div className="row justify-content-center">
                                <label className="control-label d-flex align-items-center text-right col-md-2">
                                    Maritial Status:
                                </label>
                                <div className="col-md-7">
                                    <FormControl fullWidth variant="standard"  >
                                        <InputLabel id="demo-simple-select-label">Maritial Status </InputLabel>

                                        {
                                            DisplayMarital(values.marital)
                                        }

                                    </FormControl>
                                </div>
                            </div>
                            <br />
                            <div className="row justify-content-center">
                                <label className="control-label d-flex align-items-center text-right col-md-2">
                                    Education Level:
                                </label>
                                <div className="col-md-7">
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel id="demo-simple-select-label">Education Level </InputLabel>
                                        {
                                            DisplayEducation(values.education)
                                        }
                                    </FormControl>
                                </div>
                            </div>
                            <br />
                        </div>
                        <hr />
                        <div className="container d-flex mb-3 me-5 justify-content-end">
                            <Button variant="contained" style={{ width: "180px" }} > Update </Button>
                        </div>
                        <br />
                    </div>
                </div>




            </div>
        </>
    )
}

export default ProfileEdit