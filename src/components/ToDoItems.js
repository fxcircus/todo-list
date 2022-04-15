import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers"
import { useState } from "react"

export default function ToDoItems( { toDos } ){
    return (
        <div>
            {toDos.map(toDo => {
                return (
                    <div className="row">{toDo.text} <button>COMPLETED</button></div>
                )
            })}
        </div>
    )
}