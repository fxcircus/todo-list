import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers"
import { useState,useEffect } from "react"
import { isCompositeComponent } from "react-dom/test-utils"

export default function ToDoItems( { todos, changeStatus } ){

    return (
        <ul>
            {todos.map(toDo => {
                return (
                    toDo.status==="Completed" ? "" : <div className="row"><li>{toDo.text} <button onClick={(e) => {changeStatus(toDo, 'Completed')}}>COMPLETED</button></li></div>
                )
            })}
        </ul>
    )
} 