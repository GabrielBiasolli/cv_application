import React, { useState } from 'react'
import { AddtoList, ShowList } from '../tools/tooling'

// function EditForm({ experience, onSave, onCancel }) {
//     const [editedExperience, setEditedExperience] = useState(experience)

//     function handleChange(event) {
//         const { name, value } = event.target
//         setEditedExperience(prev => ({ ...prev, [name]: value }))
//     }

//     function handleSubmit(event) {
//         event.preventDefault()
//         onSave(editedExperience)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="edit-company">Company:</label>
//             <input id="edit-company" name="company" type="text" value={editedExperience.company} onChange={handleChange} />
//             <label htmlFor="edit-position">Position:</label>
//             <input id="edit-position" name="position" type="text" value={editedExperience.position} onChange={handleChange} />
//             <label htmlFor="edit-startDate">Start Date:</label>
//             <input id="edit-startDate" name="startDate" type="date" value={editedExperience.startDate} onChange={handleChange} />
//             <label htmlFor="edit-endDate">End Date:</label>
//             <input id="edit-endDate" name="endDate" type="date" value={editedExperience.endDate} onChange={handleChange} />
//             <button type="submit">Save</button>
//             <button type="button" onClick={onCancel}>Cancel</button>
//         </form>
//     )
// }

// function HandleDelete(id, setExperiences) {
//     setExperiences(prev => prev.filter(experience => experience.id !== id))
// }

// function AddExperience(event, setExperiences, setShowForm) {
//     event.preventDefault()
//     const formData = new FormData(event.currentTarget)
//     const experience = Object.fromEntries(formData.entries())

//     setExperiences(prev => [...prev, { id: crypto.randomUUID(), ...experience }])
//     setShowForm(false)
// }

// function ShowExperiences({ list, setExperiences, editingId, setEditingId, submited }) {
//     if (list.length === 0) {
//         return <p>No experiences added</p>
//     }

//     return (
//         <div>
//             {list.map(experience => editingId === experience.id ? (
//                 <EditForm
//                     key={experience.id}
//                     experience={experience}
//                     onSave={updatedExperience => {
//                         setExperiences(prev => prev.map(item => item.id === experience.id ? updatedExperience : item))
//                         setEditingId(null)
//                     }}
//                     onCancel={() => setEditingId(null)}
//                 />
//             ) : (
//                 <CompressedForm
//                     key={experience.id}
//                     experience={experience}
//                     onEdit={() => setEditingId(experience.id)}
//                     onDelete={() => HandleDelete(experience.id, setExperiences)}
//                     submited={submited}
//                 />
//             ))}
//         </div>
//     )
// }

// function CompressedForm({ experience, onEdit, onDelete, submited }) {
//     return (
//         <div>
//             <p>Company: {experience.company}</p>
//             <p>Position: {experience.position}</p>
//             <p>Start Date: {experience.startDate}</p>
//             <p>End Date: {experience.endDate}</p>
//             {!submited && (
//                 <button type="button" onClick={onEdit}>Edit</button>
//             )}
//             {!submited && (
//                 <button type="button" onClick={onDelete}>Delete</button>
//             )}
//             <p>&emsp;</p>
//         </div>
//     )
// }

// function Form({ setExperiences, setShowForm }) {
//     return (
//         <form onSubmit={event => AddExperience(event, setExperiences, setShowForm)}>
//             <label htmlFor="company">Company:</label>
//             <input type="text" id="company" name="company" />
//             <label htmlFor="position">Position:</label>
//             <input type="text" id="position" name="position" />
//             <label htmlFor="startDate">Start Date:</label>
//             <input type="date" id="startDate" name="startDate" />
//             <label htmlFor="endDate">End Date:</label>
//             <input type="date" id="endDate" name="endDate" />
//             <button type="submit">Submit</button>
//             <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
//         </form>
//     )
// }

// export default function ProfessionalForm() {
//     const [experiences, setExperiences] = useState([])
//     const [showForm, setShowForm] = useState(false)
//     const [editingId, setEditingId] = useState(null)
//     const [submited, setSubmitted] = useState(false)

//     return (
//         <div>
//             <h1>Professional Information</h1>
//             <ShowExperiences
//                 list={experiences}
//                 setExperiences={setExperiences}
//                 editingId={editingId}
//                 setEditingId={setEditingId}
//                 submited={submited}
//             />
//             <hr/>
//             {!submited && (
//                 <button type="button" onClick={() => setShowForm(prev => !prev)}>
//                     Add Experience
//                 </button>
//             )}
//             {!submited && <button type="button" onClick={() => setSubmitted(!submited)}>Submit experiences</button>}
//             {submited && <button type="button" onClick={() => setSubmitted(!submited)}>Edit experiences</button>}
//             {showForm && <Form setExperiences={setExperiences} setShowForm={setShowForm} />}
//             <hr/>
//         </div>
//     )
// }


function ProfessionalEditForm({ experience, onSave, onCancel }) {
    const [editedExperience, setEditedExperience] = useState(experience)

    return (
        <form onSubmit={onSave}>
            <label htmlFor="edit-company" >Company:</label>
            <input id="edit-company" name="company" type="text" value={editedExperience.company} onChange={event => setEditedExperience({...editedExperience, company: event.target.value})} required/>
            <label htmlFor="edit-position">Position:</label>
            <input id="edit-position" name="position" type="text" value={editedExperience.position} onChange={event => setEditedExperience({...editedExperience, position: event.target.value})} required />
            <label htmlFor="edit-startDate">Start Date:</label>
            <input id="edit-startDate" name="startDate" type="date" value={editedExperience.startDate} onChange={event => setEditedExperience({...editedExperience, startDate: event.target.value})} required />
            <label htmlFor="edit-endDate">End Date:</label>
            <input id="edit-endDate" name="endDate" type="date" value={editedExperience.endDate} onChange={event => setEditedExperience({...editedExperience, endDate: event.target.value})} required   />
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    )
}


export function CompressedProfessionalForm({ item, onEdit=0, onDelete=0, submited=1 }) {
    return (
        <div>
            <p>Company: {item.company}</p>
            <p>Position: {item.position}</p>
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

function Form({ setExperiences, setShowForm }) {
    return (
        <form onSubmit={event => AddtoList(event, setExperiences, setShowForm)}>
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" name="company" required />
            <label htmlFor="position">Position:</label>
            <input type="text" id="position" name="position" required />
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" required  />
            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" required />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
    )
}

export default function ProfessionalForm({ submited, setSubmited, experiences, setExperiences }) {
    const [showForm, setShowForm] = useState(true)
    const [editingId, setEditingId] = useState(null)

    return (
        <div>
            <h2 className="subtitle">Professional Information</h2>
            <ShowList
                list={experiences}
                setList={setExperiences}
                editingId={editingId}
                setEditingId={setEditingId}
                submited={submited}
                EditFormComponent={ProfessionalEditForm}
                CompressedFormComponent={CompressedProfessionalForm}
            />
            
            <hr/>
            {showForm && !submited && <div><Form setExperiences={setExperiences} setShowForm={setShowForm} /> <hr/></div>}

            {(!submited && !showForm) && (
                <button type="button" onClick={() => setShowForm(prev => !prev)}>
                    Add 
                </button>
            )}
            <br />
            {!submited && <button type="button" onClick={() => setSubmited(!submited)}>Submit Professional Information</button>}
            {submited && <button type="button" onClick={() => setSubmited(!submited)}>Edit Professional Information</button>}
            
            <hr/>
        </div>
    )
}

