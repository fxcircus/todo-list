import { useState } from 'react'

export default function Form( { createToDo }) {
    const [formData, setFormData] = useState({
        text:"", completed:false
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createToDo(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>New task:</label>
            <input
                type="text"
                name="text"
                onChange={handleChange}
                value={formData.newToDo}
            />
        </form>
    )
} 