import { useRef, useState } from "react"

export default function ButtonsWithAnswer({answers,answerSelected,correctPoints,allPoints}){
    const data = answers
    const theme = data.theme;
    const question = data.question;
    const fourAnswers = data.answer;
    const rightAnswer = data.rightAnswer;
    const isAnswered = useRef(false)
    const [answerItem,setAnswerItem] = useState(null)
    const [clicked,setClicked] = useState(null)
    const [showRightAnswer,setShowRightAnswer] = useState(false);
    const [showWrongAnswer,setShowWrongAnswer] = useState(null)
    function handleOnClick(item,index){
        if (isAnswered.current) return;
        isAnswered.current = true
        setClicked(index)
        setShowWrongAnswer(index)
        if(item===rightAnswer){
            setShowRightAnswer(true)
            setAnswerItem(index)
            correctPoints()
        }
        if(item!==rightAnswer){
            const localIndex = fourAnswers.indexOf(rightAnswer);
            setAnswerItem(localIndex)
            setShowRightAnswer(true)
        }
        setTimeout(()=>{
            allPoints()
            answerSelected()
            setClicked(null)
            setAnswerItem(null)
            setShowRightAnswer(false)
            setShowWrongAnswer(null)
            isAnswered.current = false;
        },1500)
        

    }
    return(
        <div className="container-for-buttons">
            <div className="container-for-questions">
                {theme==='capital'&&<p className="question-text">Which country is {question} the capital?</p>}
                {theme==='flags'&&<p className="question-text">Which country does this flag <img src={question} alt="" className="question-image"/> belong to?</p>}
                {theme==='coatOfArms'&&<p className="question-text">Which country does this coat of arms <img src={question} alt="" className="question-image"/> belong to?</p>}
            </div>
            <div className="buttons-answers">
            {fourAnswers.map((item,index)=>(
                <button 
                    className={`button-for-question
                            ${clicked===index?'clicked':''}`}
                    key={index}
                    onClick={()=>handleOnClick(item,index)}
                >{item}<span>
                    {showRightAnswer&&(index===answerItem)&&<img src="/resources/Check_round_fill.svg" alt="right answer"/>}
                        {(item!==rightAnswer)&&(index===showWrongAnswer)&&<img src="/resources/Close_round_fill.svg" alt="wrong answer"/>
                    }
                    </span>
                </button>
            ))}
            </div>
        </div>
    )
}