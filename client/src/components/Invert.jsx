import { useState } from "react"

export function Invert(){
    const [sentence, setSentence] = useState("")
    const [auxSentece, setAuxSentence] = useState(sentence)
    const handlerSentence = (e) =>{
        e.preventDefault();
        setSentence(e.target.value)
    }
    const invert = () =>{
        const invert = sentence.split(" ").reverse().join(" ");
        setAuxSentence(invert)
    }
    return(
        <div className=" bg-zinc-800 px-8 py-3 mx-auto my-auto rounded-md">
            <h1 className="text-2xl text-center mb-2">Invert Sentence</h1>
            <input className="bg-zinc-700 rounded-md items-center"
                type="text" 
                onChange={(e)=> handlerSentence(e)}
            />
            <div>
                <label>{`inverted sentence: ${auxSentece}`}</label>
            </div>
            
            <button className="bg-lime-600 rounded-md px-1.5 " onClick={invert}>Invert</button>
        </div>
    )
}