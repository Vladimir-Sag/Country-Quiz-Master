import { shuffleArray } from "./shuffleArray";
export function generateQuestion(data){
        let myArr =[]
        const mainAnswer= ['flags','capital','coatOfArms']
        data.forEach((elem,index,array)=>{
            let question = shuffleArray(mainAnswer)[0]
            if(question==='coatOfArms'&&!elem.coatOfArms.svg){
                question = shuffleArray(['flags','capital'])[0]
            }
            function generateAnswer(numberPage){
                let res = [numberPage]
                while (res.length<=3){
                    let a = Math.floor(Math.random()*10)
                    if(!res.includes(a)) res.push(a)
                }
                let four_answer = res.map(item=>array[item].name.common)
                return shuffleArray(four_answer)
            }
            const newList = generateAnswer(index)
            myArr.push({
                id:index,
                theme:question,
                question:elem[question]?.svg||elem[question],
                answer:newList,
                rightAnswer:elem.name.common
            })
        
            
    })
    return myArr
    }