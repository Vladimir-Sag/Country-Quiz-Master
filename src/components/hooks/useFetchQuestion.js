import { useState,useEffect } from "react"
import { shuffleArray } from "../../utilits/shuffleArray"
import { generateQuestion } from "../../utilits/generateQuestion"
export function useFetchQuestion(){
    const url = 'https://restcountries.com/v3.1/all?fields=name,capital,flags,coatOfArms'
    const [result,setResult] = useState([])
    useEffect(()=>{

        const controller = new AbortController()
        const signal = controller.signal

        async function fetchData() {
            try{
                let countries;
                const cashedData = localStorage.getItem('countries_data');
                if(cashedData){
                    countries = JSON.parse(cashedData)
                }else{
                    const res = await fetch(url,{signal})
                    countries = await res.json()
                    localStorage.setItem('countries_data',JSON.stringify(countries))
                }
                
                
                const tenCountries = shuffleArray(countries).slice(0,10);
                const questions = generateQuestion(tenCountries);
                setResult(questions);
                
            }catch(err){
                if(err.name==='AbortError')return;
                console.error(err.message)
            }      
        }
        fetchData()
        return ()=>controller.abort()
    },[])

    return result
    
}