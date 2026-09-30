import React, { useState } from 'react'
import { AddtoList, ShowList } from '../tools/tooling'

function Form({ setList, setShowForm }) {
    return (
        <form onSubmit={event => AddtoList(event, setList, setShowForm)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required  />
                <button type="submit">Submit</button>
        </form>
    )}


function GeneralEditForm({ item, onSave, onCancel }) {
    const [editedInfo, setEditedInfo] = useState(item)

    return (
        <form onSubmit={onSave}>
            <label htmlFor="edit-name">Name:</label>
            <input id="edit-name" name="name" type="text" value={editedInfo.name} onChange={event => setEditedInfo({...editedInfo, name: event.target.value})} required />
            <label htmlFor="edit-email">Email:</label>
            <input id="edit-email" name="email" type="email" value={editedInfo.email} onChange={event => setEditedInfo({...editedInfo, email: event.target.value})} required />
            <label htmlFor="edit-phone">Phone:</label>
            <input id="edit-phone" name="phone" type="tel" value={editedInfo.phone} onChange={event => setEditedInfo({...editedInfo, phone: event.target.value})} required />
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    )
}


export function CompressedGeneralForm({ item, onEdit=0, onDelete=0, submited=1 }) {
    return (
        <div>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            {!submited && (
                <button type="button" onClick={onEdit}>Edit</button>
            )}
            <p>&emsp;</p>
        </div>
    )
}





export default function GeneralForm({submited, setSubmited, info, setInfo}) {
        const [showForm, setShowForm] = useState(true)
        const [editingId, setEditingId] = useState(null)
    
        return (
            <div>
                <h2 className="subtitle">General Information</h2>
                <ShowList
                    list={info}
                    setList={setInfo}
                    editingId={editingId}
                    setEditingId={setEditingId}
                    submited={submited}
                    EditFormComponent={GeneralEditForm}
                    CompressedFormComponent={CompressedGeneralForm}
                />
                
                <hr/>
                {showForm && !submited && info.length === 0 && <div><Form setList={setInfo} setShowForm={setShowForm} /> <hr/></div>}
    
                {(!submited && !showForm && info.length === 0) && (
                    <button type="button" onClick={() => setShowForm(prev => !prev)}>
                        Add 
                    </button>
                )}
                <br />
                {!submited && <button type="button" onClick={() => setSubmited(!submited)}>Submit General Information</button>}
                {submited && <button type="button" onClick={() => setSubmited(!submited)}>Edit General Information</button>}
                
                <hr/>
            </div>
        )
    }