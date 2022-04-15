import Data from '../../data'
import ToDoItems from '../../components/ToDoItems'

export default function App() {
    return (
        <main>
            <h1>My To Do List</h1>
            <form>
                <label>New Item</label>
                <input type="tex"/>
            </form>
            <h2>To Do Items:</h2>
            <ToDoItems toDos={Data}/>
            <h2>Completed:</h2>
        </main>
    )
}