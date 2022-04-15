import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers"
import { useState } from "react"

export default function ToDoItems( { toDos } ){
    return (
        <ul>
            {toDos.map(toDo => {
                return (
                    <div className="row"><li>{toDo.text} <button>COMPLETED</button></li></div>
                )
            })}
        </ul>
    )
}