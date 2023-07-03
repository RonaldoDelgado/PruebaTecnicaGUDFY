import { useState } from "react"

export function Counter(){

    const [counter, setCounter] = useState(0)

    return(
        <div className=" bg-zinc-800 px-8 py-5 mx-auto my-auto rounded-md">
            <h1 className=" text-center text-2xl mb-5">{`Counter: ${counter}`}</h1>
            <div>
                <button 
                className="bg-lime-600 p-0.5 m-0.5"
                onClick={()=>setCounter(()=>counter+1)}>Increase</button>
                <button 
                 className="bg-red-600 p-0.5 m-0.5"
                onClick={()=>setCounter(()=>counter-1)}>Decrease</button>
            </div>
        </div>
    )
}