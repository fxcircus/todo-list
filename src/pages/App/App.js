import { useState } from 'react'
import Data from '../../data'
import ToDoItems from '../../components/ToDoItems'
import Form from '../../components/Form'

export default function App() {
    const addToDo = (item) => {
        Data.push({text:"test 123", completed: true})
        console.log(item)
    }

    return (
        <main>
            <h1>My To Do List</h1>
            <Form addToDo={addToDo}/>
            <h4>To Do Items:</h4>
            <ToDoItems toDos={Data}/>
            <h4>Completed:</h4>
        </main>
    )
}