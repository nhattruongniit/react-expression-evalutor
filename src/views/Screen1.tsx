import * as React from 'react';

// mui core
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// context
import { IState, useAppContext } from "../context/AppContext";

const reg = new RegExp('^[0-9]+$');

function Screen1() {
  const [number, setNumber] = React.useState<string | null>(null);
  const { setCurrentStep, setForm } = useAppContext();
  const isErrorNumber = !reg.test(String(number));

  function handleNextStep() {
    if(isErrorNumber) return;
    setCurrentStep(2);
    setForm((prevState: IState) => ({
      ...prevState,
      number
    }))
  }

  function onChangeNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value as string)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField 
            fullWidth 
            error={isErrorNumber}
            label="Please enter a number" 
            variant="outlined" 
            value={number}
            onChange={onChangeNumber} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button 
            variant="contained" 
            fullWidth sx={{ height: '100%'}}
            onClick={handleNextStep}
          >
            Add number
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Screen1