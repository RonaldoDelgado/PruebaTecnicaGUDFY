import { updateTasks } from "../api/task.api"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export function TaskCard({task}){
    const navegate = useNavigate();
    const [completed , setCompleted] = useState(task.completed)
    const onclick = () => 
    { 
        updateTasks(task.id , 
    {
        ...task,
        completed : !task.completed
    })
    setCompleted(!completed)
}

    return(
        <div className="bg-zinc-800 p-3  ">
            <div >{
            completed?
            <p className="text-lime-400 text-xs text-right">Task Completed</p>:
            <p className="text-red-400 text-xs text-right" >Task Incomplete</p>
            }</div> 
            <div>
            <h1 className="font-bold uppercase ">{task.title}</h1>
            <p className="text-slate-400 ">{task.description}</p>
            </div>
            <button className={`rounded-sm mt-10 px-3 ${completed?"bg-red-600": "bg-lime-600"}`} onClick={onclick}>{completed?"Reverse":"To complete"}</button>
        </div>
    )
}