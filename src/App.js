
import React, { useState } from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';

 function App() {
  const [hourlyWage, setHourlyWage] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [answer, setFinalAnswer] = useState(0);

  const handleChange = () => {

    const convertHours = totalHours * 60; //hours in minutes
    const minutesAltogether = convertHours + totalMinutes;
    const finalCalcHours = (minutesAltogether / 60) * hourlyWage;
    const finalCalc = Math.round(finalCalcHours * 100) / 100
    if(isNaN(finalCalc)){
      alert('Must enter numbers only!')
    }
    setFinalAnswer(finalCalc)
  };

  return (
    <div style={{marginTop: "3rem", display:'flex', justifyContent:'center'}} className="App">
      <Card raised="true" sx={{width: 400, height: 550, backgroundColor:'#9c27b0' }}>
        <Typography sx={{textAlign:'center', color:'white', marginTop:'1rem'}} variant="h6">Studio 786 Hourly Wage Calculator</Typography>
        <div style={{display:'flex', flexDirection:'column', margin:'2rem'}}>
        <TextField
               style={{backgroundColor:'#c786d3', marginBottom:'1rem'}}
               variant="filled"
            
            label="Hourly wage"
            pattern="[0-9]*"
            onChange={(e) =>
              setHourlyWage((v) =>
                e.target.validity.valid
                  ? +e.target.value
                  : "please enter a number"
              )
            }
          />
          <TextField
         style={{backgroundColor:'#c786d3', marginBottom:'1rem'}}
          variant="filled"
            
            label="Hours"
            pattern="[0-9]*"
            onChange={(e) =>
              setTotalHours((v) =>
                e.target.validity.valid
                  ? +e.target.value
                  : "please enter a number"
              )
            }
          />
          <TextField
          style={{backgroundColor:'#c786d3', marginBottom:'1rem', color:'white'}}
          variant="filled"
            
            label="Minutes"
            pattern="[0-9]*"
            onChange={(e) =>
              setTotalMinutes((v) =>
                e.target.validity.valid
                  ? +e.target.value
                  : "please enter a number"
              )
            }
          />
      
          <Button onClick={()=> handleChange()} style={{ textDecoration:'none', backgroundColor:'#d500f9', border:'none', height:'50px', color:'white', borderRadius: '3px', marginTop:'1rem'}}  variant="contained">submit</Button>
          <Typography sx={{textAlign:'center', marginTop:'1rem', color:'white'}} variant="h4">Total Earnings:</Typography>
          <Typography variant="h3" sx={{color:'white', textAlign:'center', marginTop:'2rem'}}>${answer}</Typography>
        </div>
      </Card>
    </div>
  );
}


export default App;
