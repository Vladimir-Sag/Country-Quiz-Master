import { useState } from "react"
import Numbers from "./elements/Numbers"
import ButtonsWithAnswer from "./elements/ButtonsWithAnswer"
export default function Quiz({data,correctPoints,allPoints}){
    const [numberPage,setNumberPage] = useState(0)
    const [answeredNumbers, setAnsweredNumbers] = useState([])
    const result = data
    function handleOnClick(){
        if(numberPage<10) setNumberPage(prev=>prev+1)
        setAnsweredNumbers(prev => [...prev, numberPage])
    }
    return(
        <main>
            <article>
                <div className="container">
                    <div className="number-container">
                        {Array.from({length:10},(_,i)=>i+1).map(num=>(
                            <Numbers key={num} number={num} state={answeredNumbers.includes(num-1)||numberPage === num-1}/>
                        ))}
                    </div>       
                    <ButtonsWithAnswer 
                        answers={result[numberPage]}
                        answerSelected ={handleOnClick}
                        correctPoints={correctPoints}
                        allPoints={allPoints}
                    />
                </div>
            </article>
        </main>
    )
}