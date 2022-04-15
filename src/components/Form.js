import { useState } from 'react'

export default function Form( { addToDo }) {
    const [formData, setFormData] = useState({
        text:""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addToDo(formData)
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