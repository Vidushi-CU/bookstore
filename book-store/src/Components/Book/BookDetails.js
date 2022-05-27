import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";

import {FormControlLabel, Checkbox, FormLabel, TextField,Box, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom'

const BookDetails = () => {
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
    const id= useParams().id;
    // console.log(id);
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:5000/books/${id}`).then((res) => res.data)
            .then(data=>setInputs(data.book));
        };
        fetchHandler();
    }, [id]);

    const sendRequest=async()=>{
      await axios.put(`http://localhost:5000/books/${id}`,{
        name:String(inputs.name),
            author: String(inputs.author),
            description:String(inputs.description),
            price:Number(inputs.price),
            image:String(inputs.image),
            availability: Boolean(checked)
      }).then(res=>res.data);
    }

    const handleSubmit =(e)=>{
      e.preventDefault();
      sendRequest().then(()=>history("/books"))
    }

    const handleChange = (e)=>{
      setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
    }
  return (
    <div>
        { inputs && 
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

        <FormLabel sx={{fontSize:20}}>Description / Address - Phone number</FormLabel>
        <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />

        <FormLabel sx={{fontSize:20}}>Price</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} type={"number"} margin="normal" fullWidth variant="outlined" name="price" />

        <FormLabel sx={{fontSize:20}}>Product Image url</FormLabel>
        <TextField value={inputs.image } onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />

        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available in the Stock" />

        <Button variant="contained" type="submit">Update Product</Button>

        </Box>
      </form>}
    </div>
  )
}

export default BookDetails;