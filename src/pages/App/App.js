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
            <h4>To Do Items:</h4>
            <ToDoItems toDos={Data}/>
            <h4>Completed:</h4>
        </main>
    )
}