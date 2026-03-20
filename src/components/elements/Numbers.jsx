export default function Numbers({number,state}){
    return(
        <div className="number-question" 
         style={{ background: state ? 'var(--main-gradient)' : 'var(--primary-darker)' }}>{number}</div>
    )
}