import React, { useState } from 'react'
export function EditForm({ item, onSave, onCancel, FormComponent }) {
   
    const [editedEducation, setEditedEducation] = useState(item)

    function handleChange(event) {
        const { name, value } = event.target
        setEditedEducation(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        onSave(editedEducation)
    }

    return (
        <FormComponent handleChange={handleChange} handleSubmit={handleSubmit} editedEducation={editedEducation} onCancel={onCancel} onSave={onSave} />
    )
}

function HandleDelete(id, setList) {
    setList(prev => prev.filter(item => item.id !== id))
}

export function AddtoList(event, setList, setShowForm) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const item = Object.fromEntries(formData.entries())

    console.log(item)
    setList(prev => [...prev, { id: crypto.randomUUID(), ...item }])
    setShowForm(false)
}

export function ShowList({ list, setList, editingId, setEditingId, submited, EditFormComponent, CompressedFormComponent }) {
    if (list.length === 0) {
        return <p>No information given</p>
    }

    return (
        <div>
            {list.map(item => editingId === item.id ? (
                <EditFormComponent item={item}
                    onSave={updatedItem => {
                        setList(prev => prev.map(listItem => listItem.id === item.id ? updatedItem : listItem))
                        setEditingId(null)
                    }}
                    onCancel={() => setEditingId(null)}
                    FormComponent={EditFormComponent}


                />
            ) : (
                <CompressedFormComponent
                    item={item}
                    onEdit={() => setEditingId(item.id)}
                    onDelete={() => HandleDelete(item.id, setList)}
                    submited={submited}
                />
            ))}
        </div>
    )
}