import React from 'react'
import CustomTable from "./Table"
import Button from '@mui/material/Button';

const Import = (props) => {

    return (
     <>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
        <h2>Count:{props.makes.length}</h2>
       <CustomTable makes={props.makes}/>
     </>
    )
}

export default Import