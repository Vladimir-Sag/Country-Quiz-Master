import { useState } from "react"
import Quiz from './Quiz'
import { useFetchQuestion } from "./hooks/useFetchQuestion";
import Congratulation from "./Congratulations";

export default function Question(){

    const [rightPoints,setRightPoints] = useState(0)
    const [count,setCount] = useState(0);

    const data= useFetchQuestion()||[]
    function handleCorrectPoints(){
        setRightPoints(prev=>prev+1)
       
    }
    function handleAllPoints(){
        setCount(prev=>prev+1)
    }
    function handlePlayAgain(){
        setRightPoints(0);
        setCount(0);
    }
    return(
       
        <main>
            {(count<10)?
            (
            <section className="hero-section">
                <div className="hero-container">
                    <h1 className="hero-title">Country Quiz</h1>
                    <p className="hero-score">
                        <span>
                            <img src="./resources/cup.png" alt="cup" className="hero-image" loading="lazy"/>
                        </span>
                        {rightPoints}/10 Points
                    </p>
                </div>                
                {data.length>0&&<Quiz data = {data} correctPoints={handleCorrectPoints} allPoints={handleAllPoints}/>}
            </section>
            ):(<Congratulation count={rightPoints} playAgain={handlePlayAgain}/>)}
        </main>
    )
}