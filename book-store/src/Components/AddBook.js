import React from 'react'
import {FormLabel, TextField,Box, Button} from '@mui/material';

const AddBook = () => {
  return (
    <form action="">
        <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        paddingTop={10}
        >
        <FormLabel>Name</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="name" />

        <FormLabel>Author</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="name" />

        <FormLabel>Description</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="name" />

        <FormLabel>Price</FormLabel>
        <TextField type={"number"} margin="normal" fullWidth variant="outlined" name="name" />

        <Button variant="contained" type="submit">Add Product</Button>

        </Box>
    </form>
  )
}

export default AddBook