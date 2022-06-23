import React from 'react'
import { useState } from 'react';
import {FormControlLabel, Checkbox, FormLabel, TextField,Box, Button} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const AddBook = () => {
    const history= useNavigate();
    const [inputs, setInputs] = useState({
        name:'',
        description:'',
        price:'',
        author:'',
        image:''
    });

    const [checked, setChecked] = useState(false)

    const handleChange = (e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    };

    const sendRequest = async() =>{
        await axios.post("http://localhost:5000/books",{
            name:String(inputs.name),
            author: String(inputs.author),
            description:String(inputs.description),
            price:Number(inputs.price),
            image:String(inputs.image),
            availability: Boolean(checked)
        }).then(res => res.data);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputs,checked);
        sendRequest().then(()=>history('/books'));
    }



  return (
    <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        paddingTop={10}
        >
        <FormLabel sx={{fontSize:20}}>Product</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />

        <FormLabel sx={{fontSize:20}}>Seller</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />

        <FormLabel sx={{fontSize:20}}>Description/ Address and the whole Information</FormLabel>
        <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />

        <FormLabel sx={{fontSize:20}}>Price</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} type={"number"} margin="normal" fullWidth variant="outlined" name="price" />

        <FormLabel sx={{fontSize:20}}>Product Image</FormLabel>
        <TextField value={inputs.image } onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />

        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available in the Stock" />

        <Button variant="contained" type="submit">Add Product</Button>

        </Box>
    </form>
  )
}

// import React from "react";
// import hero from "./assets/3.svg";
// import {
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   FormLabel,
//   FormControl,
//   FormHelperText,
//   RadioGroup,
//   Radio,
//   InputLabel,
//   Switch,
//   Select,
//   MenuItem,
//   Button,
// } from "@material-ui/core";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// import DateFnsUtils from "@date-io/date-fns";
// import { makeStyles } from "@material-ui/core/styles";
// import { useForm, Controller } from "react-hook-form";

// const useStyles = makeStyles((theme) => ({
//   inputField: {
//     width: "100%",
//     margin: theme.spacing(1, 0),
//   },
// }));

// const AddBook = () => {
//   const classes = useStyles();
//   const { register, handleSubmit, control, errors } = useForm();
//   const onSubmit = (data) => console.log(data);
//   console.log(errors);
//   return (
//     <div className="box">
//       <div className="box-primary">
//         <img src={hero} height="300px" alt="" />
//       </div>
//       <div className="box-secondary">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* 1) TextField */}
//           <TextField
//             placeholder="Enter Your First Name"
//             label="First Name"
//             variant="outlined"
//             fullWidth
//             className={classes.inputField}
//             name="firstName"
//             inputRef={register({
//               required: "First Name is required.",
//             })}
//             error={Boolean(errors.firstName)}
//             helperText={errors.firstName?.message}
//           />

//           {/* 2) TextField */}
//           <TextField
//             placeholder="Enter Your Last Name"
//             label="Last Name"
//             variant="outlined"
//             fullWidth
//             className={classes.inputField}
//             name="lastName"
//             inputRef={register({
//               required: "Last Name is required.",
//             })}
//             error={Boolean(errors.lastName)}
//             helperText={errors.lastName?.message}
//           />

//           {/* 3) TextField */}
//           <TextField
//             placeholder="Enter Your E-mail Address"
//             label="E-mail"
//             variant="outlined"
//             fullWidth
//             className={classes.inputField}
//             name="email"
//             inputRef={register({
//               required: "E-mail Address is required.",
//             })}
//             error={Boolean(errors.email)}
//             helperText={errors.email?.message}
//           />

//           {/* 4) TextField */}
//           <TextField
//             placeholder="Enter Your Phone Number"
//             label="Phone"
//             variant="outlined"
//             fullWidth
//             className={classes.inputField}
//             name="phone"
//             inputRef={register({
//               required: "Phone Number is required.",
//             })}
//             error={Boolean(errors.phone)}
//             helperText={errors.phone?.message}
//           />

//           <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             {/* 5) Date Picker */}
//             <Controller
//               render={(props) => (
//                 <KeyboardDatePicker
//                   disableToolbar
//                   variant="inline"
//                   format="MM/dd/yyyy"
//                   margin="normal"
//                   label="Date of Admission"
//                   value={props.value}
//                   onChange={props.onChange}
//                   fullWidth
//                   error={Boolean(errors.date_of_admission)}
//                   helperText={errors.date_of_admission?.message}
//                 />
//               )}
//               name="date_of_admission"
//               defaultValue={null}
//               control={control}
//               rules={{
//                 required: "Date of Admission is required.",
//               }}
//             />

//             {/* 4) Time Picker */}
//             <Controller
//               render={(props) => (
//                 <KeyboardTimePicker
//                   margin="normal"
//                   label="Time of Admission"
//                   value={props.value}
//                   onChange={props.onChange}
//                   fullWidth
//                   error={Boolean(errors.time_of_admission)}
//                   helperText={errors.time_of_admission?.message}
//                 />
//               )}
//               name="time_of_admission"
//               defaultValue={null}
//               control={control}
//               rules={{
//                 required: "Time of Admission is required.",
//               }}
//             />
//           </MuiPickersUtilsProvider>

//           {/* Radio Buttons */}
//           <FormControl
//             className={classes.inputField}
//             error={Boolean(errors.gender)}
//           >
//             <FormLabel>Choose Your Gender</FormLabel>
//             <RadioGroup row name="gender">
//               <FormControlLabel
//                 value="female"
//                 control={
//                   <Radio
//                     inputRef={register({
//                       required: "Choose your gender",
//                     })}
//                   />
//                 }
//                 label="Female"
//               />
//               <FormControlLabel
//                 value="male"
//                 control={
//                   <Radio
//                     inputRef={register({
//                       required: "Choose your gender",
//                     })}
//                   />
//                 }
//                 label="Male"
//               />
//               <FormControlLabel
//                 value="other"
//                 control={
//                   <Radio
//                     inputRef={register({
//                       required: "Choose your gender",
//                     })}
//                   />
//                 }
//                 label="Other"
//               />
//             </RadioGroup>
//             <FormHelperText>{errors.gender?.message}</FormHelperText>
//           </FormControl>

//           {/* Select */}
//           <FormControl
//             fullWidth
//             className={classes.inputField}
//             error={Boolean(errors.course)}
//           >
//             <InputLabel id="demo-simple-select-label">
//               Select Your Course
//             </InputLabel>
//             {/* <Controller
//               as={
//                 <Select>
//                   <MenuItem value="">Choose your course</MenuItem>
//                   <MenuItem value="Web Development">Web Development</MenuItem>
//                   <MenuItem value="App Development">App Development</MenuItem>
//                   <MenuItem value="UI/UX">UI/UX</MenuItem>
//                 </Select>
//               }
//               name="course"
//               control={control}
//               defaultValue=""
//             /> */}
//             <Controller
//               render={(props) => (
//                 <Select value={props.value} onChange={props.onChange}>
//                   <MenuItem value="">Choose your course</MenuItem>
//                   <MenuItem value="Web Development">Web Development</MenuItem>
//                   <MenuItem value="App Development">App Development</MenuItem>
//                   <MenuItem value="UI/UX">UI/UX</MenuItem>
//                 </Select>
//               )}
//               name="course"
//               control={control}
//               defaultValue=""
//               rules={{
//                 required: "please choose your course.",
//               }}
//             />
//             <FormHelperText>{errors.course?.message}</FormHelperText>
//           </FormControl>

//           {/*  Switch */}
//           <FormControlLabel
//             className={classes.inputField}
//             control={<Switch inputRef={register} name="notification" />}
//             label="Send me regular updates"
//           />

//           {/* Checkbox */}
//           <FormControl
//             error={Boolean(errors.tnc)}
//             style={{ display: "block", marginBottom: 15 }}
//           >
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="tnc"
//                   inputRef={register({
//                     required: "please aggree our terms and condtions",
//                   })}
//                 />
//               }
//               label="I aggree all terms and conditions"
//             />
//             <FormHelperText>{errors.tnc?.message}</FormHelperText>
//           </FormControl>

//           <Button variant="contained" color="primary" type="submit">
//             create new account
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };


export default AddBook