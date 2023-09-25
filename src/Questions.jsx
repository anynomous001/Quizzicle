import React from 'react'
import './App.css'

const Questions = ({ questions }) => {

    /*(5) [{…}, {…}, {…}, {…}, {…}]
    0: category: "Sports"
    correct_answer: "American Football"
    difficulty: "medium"
    incorrect_answers: (3) ['Wrestling', 'Archery', 'Horse-Racing']
    question: "Which sport is NOT traditionally played during the Mongolian Naadam festival?"
    type: "multiple"
    [[Prototype]]: Object
    1: {category: 'Sports', type: 'multiple', difficulty: 'medium', question: 'How many French Open&#039;s did Bj&ouml;rn Borg win?', correct_answer: '6', …}
    2: {category: 'Sports', type: 'multiple', difficulty: 'medium', question: 'How many premier league trophies did Sir Alex Ferguson win during his time at Manchester United?', correct_answer: '13', …}
    3: {category: 'Sports', type: 'multiple', difficulty: 'medium', question: 'What is the name of the AHL affiliate of the Toronto Maple Leafs?', correct_answer: 'Toronto Marlies', …}
    4: {category: 'Sports', type: 'multiple', difficulty: 'medium', question: 'Which of these countries&#039; national teams qualified for the 2018 FIFA World Cup in Russia?', correct_answer: 'Tunisia', …}
    length: 5[[Prototype]]: Array(0) */
    const quiz_ques = questions.map((item) => {

        /* const answersContext = React.createContext(answersHtml)*/

        const inCorrectAnswers = item.incorrect_answers;
        const correctAnswer = item.correct_answer;
        const answersArray = inCorrectAnswers.concat(correctAnswer);

        function shuffleArray(array) {
            // Fisher-Yates shuffle algorithm
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function handleSelect(e) {
            e.target.classList.add('select')
        }



        const suffledArray = shuffleArray(answersArray)


        const answersHtml = suffledArray.map((item, index) => {
            return (
                <button key={index} className='answer_span' onClick={(e) => handleSelect(e)}>{item}</button>
            );
        });

        return (
            <div className='quizes'>
                <h3>{item.question}</h3>
                <div className='answers-div'>
                    {answersHtml}
                </div>
                <hr></hr>
            </div>
        )
    })

    return (
        <div className='quiz-div'>
            {quiz_ques}
            <button className='check-btn'>Check Answer</button>
        </div>
    )
}
export default Questions