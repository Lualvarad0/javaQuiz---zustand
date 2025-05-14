import { Card, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material"
import { useQuestionsStore } from "./store/questions"
import SyntaxHighLighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {type Question as QuestionType } from "./types"
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { Footer } from "./Footer"

const getBackgroundColor = (info: QuestionType, index: number) =>{
    const {userSelectedAnswer, correctAnswer} = info
    
    if (userSelectedAnswer == null) return 'transparent'

    if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'
    
    if (index === correctAnswer) return 'green'

    if (index === userSelectedAnswer) return 'red'
    
    return 'transparent'
}

const Question = ({info}: {info: QuestionType})=>{

    const selectAnwer = useQuestionsStore(state => state.selectAnswer)

    const createHandleClick = (answerIndex: number) => () =>{
        selectAnwer(info.id, answerIndex)
    }

    return (
        <Card variant='outlined' sx={{bgcolor:'#222', p:2, textAlign:'left',
            marginTop:4 }}>
            <Typography variant="h5">
                {info.question}
            </Typography>

            <SyntaxHighLighter language='javascript' style={gradientDark}>
                {info.code}
            </SyntaxHighLighter>

            <List sx={{ bgcolor: '#333', textAlign: 'center'}} disablePadding>
                {info.answers.map((answer, index) =>(
                    <ListItem key={index} disablePadding divider>
                        <ListItemButton 
                        disabled={info.userSelectedAnswer === null}
                        onClick={createHandleClick(index)}
                        sx={{
                            backgroundColor: getBackgroundColor(info, index),

                        }}>
                            <ListItemText primary={answer}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Card>
    )
}

export const Game = () =>{
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    
    const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
    const goPreviusQuestion = useQuestionsStore(state => state.goPreviusQuestion)
    
    const questionInfo = questions[currentQuestion]

    return (
        <>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
            <IconButton onClick={goPreviusQuestion} disabled={currentQuestion === 0}>
                <ArrowBackIosNew/>
            </IconButton>

            {currentQuestion + 1} / {questions.length}

            <IconButton onClick={goNextQuestion} disabled={currentQuestion >= questions.length -1}>
                <ArrowForwardIos/>
            </IconButton>
        </Stack>
        <Question info={questionInfo}/>

        <Footer/>
        </>
    )

}