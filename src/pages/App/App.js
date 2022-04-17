import { useState, useEffect } from 'react'
import Data from '../../data'
import ToDoItems from '../../components/ToDoItems'
import Form from '../../components/Form'
import ComletedItems from '../../components/CompletedItems'
import axios from 'axios'

export default function App() {
    const [toDos, setToDos] = useState([])
    const URL = `https://roytodolistminiproject.herokuapp.com/api`

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
            const response = await axios.get(`${URL}/todos/`)
            setToDos(response.data)
        } catch (err){
            console.error(err)
        }
    }

    const createToDo = async(item) => {
        try {
            await axios({
                method:'post',
                url:`${URL}/todos/`,
                data:item
            })
            console.log(item)
            getToDos()
        } catch (err){
            console.error(err)
        }
    }

    const changeStatus = async(item, newStatus) => {
        try {
            await axios({
                method:'put',
                url:`${URL}/todos/${item._id}`,
                data: {text: item.text, status: newStatus}
            })
            getToDos()
        } catch(err) {
            console.error(err)
        }
    }

    const deleteToDo = async(item) => {
        try {
            await axios({
                method:'delete',
                url:`${URL}/todos/${item._id}`
            })
            getToDos()
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getToDos()
    },[])

    return (
        <main>
            <h1>Mini Project To-Do List</h1>
            <Form createToDo={createToDo}/>
            <h4>To do:</h4>
            <ToDoItems todos={toDos} changeStatus={changeStatus} deleteToDo={deleteToDo} />
            <h4>Completed:</h4>
            <ComletedItems todos={toDos} changeStatus={changeStatus} deleteToDo={deleteToDo} />
        </main>
    )
} 