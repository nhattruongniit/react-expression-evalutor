
// mui core
import { Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// context
import { useAppContext } from "./context/AppContext";

// components
import Screen1 from "./views/Screen1";
import Screen2 from "./views/Screen2";

function App() {
  const { currentStep } = useAppContext();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography 
          variant="h2" 
          component="h4" 
          sx={{
            color: 'var(--text-primary)',
            mb: 10
          }}
        >
          Expression <br />Evaluator
        </Typography>

        {currentStep === 1 && <Screen1 />}

        {currentStep === 2 && <Screen2 />}

      </Container>
    </>
    
  );
}

export default App;
