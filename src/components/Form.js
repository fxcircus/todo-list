import { useState } from 'react'

export default function Form( { addToDo }) {
    const [formData, setFormData] = useState({
        text:"", completed:false
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addToDo(formData, true)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>New Item</label>
            <input
                type="text"
                name="text"
                onChange={handleChange}
                value={formData.newToDo}
            />
        </form>
    )
}