import { useState, useEffect } from 'react'
import Data from '../../data'
import ToDoItems from '../../components/ToDoItems'
import Form from '../../components/Form'

export default function App() {
    const [toDos, setToDos] = useState(Data)

    const addToDo = (item, isNew) => {
        if (isNew) {
            const arr = toDos
            arr.push(item)
            setToDos(arr)
            console.log(toDos)
        }
    }

    useEffect(() => {
        console.log('rendered todo')
    },toDos)

    return (
        <main>
            <h1>My To Do List</h1>
            <Form addToDo={addToDo}/>
            <h4>To Do Items:</h4>
            <ToDoItems toDos={toDos}/>
            <h4>Completed:</h4>
        </main>
    )
}