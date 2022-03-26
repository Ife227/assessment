import { useState } from '@hookstate/core';
import { React, useEffect} from 'react';
import {  docSnap, getListOfQuestions } from '../../services/questions';
import store from '../../store';
import Questions from './questions-d-interrogation';

function Home() {
    const {user, questions} = useState(store)
    
    useEffect(() => {
        getListOfQuestions()
    },[])

    console.log(questions.get())
    return(
        <Questions listOfQuestions = {questions.get()}/>
    )
}

export default Home;