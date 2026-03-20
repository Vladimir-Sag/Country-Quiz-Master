export default function Congratulation({count,playAgain}){
    return(
        <section className="congratulation">
            <figure>
                <img src="./resources/congrats.png" alt="Congratulations" loading="lazy"/>
            </figure>
            <h2>Congrats! You completed the quiz.</h2>
            <p>You answered {count}/10 correctly</p>
            <button className="button-for-question "
                    onClick={playAgain}
            >Play again</button>
        </section>
    )
}