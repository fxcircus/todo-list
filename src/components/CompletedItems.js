import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers"
import { isCompositeComponent } from "react-dom/test-utils"

export default function CompletedItems( { todos, changeStatus, deleteToDo } ){

    return (
        <ul>
            {todos.map(toDo => {
                return (
                    toDo.status==="Completed" ?
                    <div className="completed">
                        <li>
                            {toDo.text} <button onClick={(e) => {changeStatus(toDo, 'In-Progress')}}>TO DO</button>
                            <button onClick={(e) => {deleteToDo(toDo)}}>DELETE</button>
                        </li>
                    </div>
                    : ""
                )
            })}
        </ul>
    )
} 