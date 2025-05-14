import './App.css'
import { Container, Stack, Typography, useTheme } from '@mui/material'
import useMediaQuery from "@mui/material/useMediaQuery";
import { JavascriptLogo } from './JavascriptsLogo';
import { Start } from './Start';
import { useQuestionsStore } from './store/questions';
import { Game } from './Game';
import { useQuestionsData } from './hooks/useQuestionsData';
import { Results } from './Results';
function App() {
  const questions = useQuestionsStore(state => state.questions)
  const { unanswered } = useQuestionsData()
  console.log(questions)
  const theme = useTheme()

  const medium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <main>
      <Container maxWidth='sm'>

        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavascriptLogo />
          <Typography variant={medium ? 'h2' : 'h5'} component='h1'>
            JavaScript Quiz
          </Typography>

          
        </Stack>

        {questions.length === 0 && <Start/>}
        {questions.length > 0 && unanswered > 0 && <Game/>}
        {questions.length > 0 && unanswered === 0 && <Results />}


          <strong style={{ fontSize: '18px', marginBottom: '48px', display: 'block' }}>
          </strong>

           <strong style={{ display: 'block', fontSize: '14px', marginTop: '48px' }}>Desarrollado con TypeScript + Zustand </strong>


      </Container>
    </main>
  )
}

export default App
