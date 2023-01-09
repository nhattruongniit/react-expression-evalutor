/* eslint-disable no-eval */
import * as React from 'react';

// mui core
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

// context
import { useAppContext } from "../context/AppContext";

const BoxStyled = styled(Box)(() => ({
  minWidth: 70,
  height: 70,
  padding: '0 5px',
  backgroundColor: '#ECF5F7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#141414',
  borderRadius: 1
}));

function Screen2() {
  const { number } = useAppContext();
  const [expression, setExpression] = React.useState({
    operator: '+',
    operand: "1",
  });
  const [total, setTotal] = React.useState(0);
  const res = `${Number(number)}${expression.operator}${Number(expression.operand)}`;

  function onChangeOperator(event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setExpression(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function calculationOperation() {
    setTotal(eval(res));
  }

  React.useLayoutEffect(() => {
    setTotal(eval(res));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid 
          item xs={12} 
          md={12} 
          justifyContent="center"
          sx={{
            display: 'flex',
          }}
        >
          <Grid container justifyContent="center" spacing={1}>
            <Grid item>
              <BoxStyled>
                <Typography variant='h6' component="div">{number}</Typography>
              </BoxStyled>
            </Grid>
            <Grid item>
            <BoxStyled>
                <Typography variant='h6' component="div">{expression.operator}</Typography>
              </BoxStyled>
            </Grid>
            <Grid item>
              <BoxStyled>
                <Typography variant='h6' component="div">{expression.operand}</Typography>
              </BoxStyled>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='h6' component="div">=</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography 
            variant='h1' 
            component="div"  
            sx={{
              color: 'var(--text-primary)',
            }}
          >
            {total}
          </Typography>
        </Grid>
      </Grid>
      
      <br /><br />
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-autowidth-label">Operator</InputLabel>
            <Select
              label="Operator"
              name="operator"
              sx={{ textAlign: 'left'}}
              value={expression.operator}
              onChange={onChangeOperator}
            >
              <MenuItem value="+">+</MenuItem>
              <MenuItem value="-">-</MenuItem>
              <MenuItem value="*">*</MenuItem>
              <MenuItem value="/">/</MenuItem>
            </Select>
          </FormControl>
          
        </Grid>
        <Grid item xs={6} md={4}>
          <TextField 
            fullWidth 
            label="Operand" 
            name="operand" 
            variant="outlined" 
            value={expression.operand}
            onChange={onChangeOperator}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button 
            variant="contained" 
            fullWidth sx={{ height: '100%'}}
            onClick={calculationOperation}
          >
            Add Operation
          </Button>
        </Grid>
      </Grid>
      
    </Box>
  )
}

export default Screen2