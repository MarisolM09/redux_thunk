import React from 'react'
import CustomTable from "./Table"
import Button from '@mui/material/Button';

const Import = (props) => {

    return (
     <div className="import-btn">
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
       
       <CustomTable makes={props.makes} deleteMake={props.deleteMake}/>
     </div>
    )
}

export default Import