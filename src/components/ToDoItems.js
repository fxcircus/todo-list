import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers"
import { useState,useEffect } from "react"
import { isCompositeComponent } from "react-dom/test-utils"

export default function ToDoItems( { todos } ){

    return (
        <ul>
            {todos.map(toDo => {
                return (
                    <div className="row"><li>{toDo.text} <button>COMPLETED</button></li></div>
                )
            })}
        </ul>
    )
} 