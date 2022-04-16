import { useState, useEffect } from 'react'
import Data from '../../data'
import ToDoItems from '../../components/ToDoItems'
import Form from '../../components/Form'
import axios from 'axios'

export default function App() {
    const [toDos, setToDos] = useState([])

    // const addToDo = (item, isNew) => {
    //     if (isNew) {
    //         const arr = toDos
    //         arr.push(item)
    //         setToDos([{text:"roy"}])
    //         console.log(toDos)
    //     }
    // }

    const getToDos = async() =>{
        try {
            const response = await axios.get(`http://localhost:3000/todos/`)
            setToDos(response.data)
            // console.log(toDos)
        } catch (err){
            console.error(err)
        }
    }

    const createToDo = async(item) => {
        try {
            await axios({
                method:'post',
                url:`http://localhost:3000/todos/`,
                data:item
            })
            console.log(item)
            getToDos()
        } catch (err){
            console.error(err)
        }
    }

    useEffect(() => {
        getToDos()
    },[])

    return (
        <main>
            <h1>My To Do List</h1>
            <Form createToDo={createToDo}/>
            <h4>To Do Items:</h4>
            <ToDoItems todos={toDos}/>
            <h4>Completed:</h4>
        </main>
    )
} 