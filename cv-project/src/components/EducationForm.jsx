import React, { useState } from 'react'
import { AddtoList, ShowList } from '../tools/tooling'


export function CompressedEducationForm({ item, onEdit=0, onDelete=0, submited=1 }) {
    return (
        <div>
            <p>Instituition: {item.instituition}</p>
            <p>Course: {item.course}</p>
            <p>Start Date: {item.startDate}</p>
            <p>End Date: {item.endDate}</p>
            {!submited && (
                <button type="button" onClick={onEdit}>Edit</button>
            )}
            {!submited && (
                <button type="button" onClick={onDelete}>Delete</button>
            )}
            <p>&emsp;</p>
        </div>
    )
}

function Form({ setEducation, setShowForm }) {
    return (
        <form onSubmit={event => AddtoList(event, setEducation, setShowForm)}>
            <label htmlFor="instituition">Instituition:</label>
            <input type="text" id="instituition" name="instituition" required />
            <label htmlFor="course">Course:</label>
            <input type="text" id="course" name="course" required />
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" required />
            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" required />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
    )
}
function EducationEditForm({ education, onSave, onCancel }) {
    const [editedEducation, setEditedEducation] = useState(education)

    return (
        <form onSubmit={event => {
            event.preventDefault()
            onSave(editedEducation)
        }}>
            <label htmlFor="instituition">Instituition:</label>
            <input type="text" id="instituition" name="instituition" value={editedEducation.instituition} onChange={event => setEditedEducation(prev => ({ ...prev, instituition: event.target.value }))} required />
            <label htmlFor="course">Course:</label>
            <input type="text" id="course" name="course" value={editedEducation.course} onChange={event => setEditedEducation(prev => ({ ...prev, course: event.target.value }))} required />
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" value={editedEducation.startDate} onChange={event => setEditedEducation(prev => ({ ...prev, startDate: event.target.value }))} required />
            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" value={editedEducation.endDate} onChange={event => setEditedEducation(prev => ({ ...prev, endDate: event.target.value }))} required />
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    )
}

export default function EducationalForm({ submited, setSubmited, education, setEducation }) {
    const [showForm, setShowForm] = useState(true)
    const [editingId, setEditingId] = useState(null)

    return (
        <div>
            <h2 className="subtitle">Educational Information</h2>
            <ShowList
                list={education}
                setList={setEducation}
                editingId={editingId}
                setEditingId={setEditingId}
                submited={submited}
                EditFormComponent={EducationEditForm}
                CompressedFormComponent={CompressedEducationForm}
            />
            <hr/>
            {showForm && !submited && <div><Form setEducation={setEducation} setShowForm={setShowForm} /><hr /></div>}

            {(!submited && !showForm) && (
                <button type="button" onClick={() => setShowForm(prev => !prev)}>
                    Add
                </button>
            )}
            <br/>
            {!submited && <button type="button" onClick={() => setSubmited(!submited)}>Submit educational information</button>}
            {submited && <button type="button" onClick={() => setSubmited(!submited)}>Edit educational information</button>}

            <hr/>
        </div>
    )
}

