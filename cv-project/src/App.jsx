import './App.css'
import GeneralForm from './components/GeneralForm'
import ProfessionalForm from './components/ProfessionalForm'
import EducationForm from './components/EducationForm' 
import RenderCV from './components/RenderCV'
import { useState } from 'react'
import Intro from './components/Intro.jsx'

function App() {
  const [generalSubmited, setGeneralSubmited] = useState(false)
  const [professionalSubmited, setProfessionalSubmited] = useState(false)
  const [educationSubmited, setEducationSubmited] = useState(false)

  const [info, setInfo] = useState([])
  const [experiences, setExperiences] = useState([])
  const [education, setEducation] = useState([])
  const [showCV, setShowCV] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  return (
    <main className="App">

      {showIntro ? (
        <Intro setShowIntro={setShowIntro} />
      ) : (
        <div>
          {showCV ? (
            <h1 className="page-title">Your CV</h1>
          ) : <h1 className="page-title">CV builder</h1>}
          <button className="cool-button" onClick={() => setShowIntro(true)}>
            Intro
          </button>
          {((generalSubmited && professionalSubmited && educationSubmited && !showCV)) && (
            <button className="cool-button" type="button" onClick={() => setShowCV(true)}>
              Done
            </button>
          )}

      {showCV ? 
      <div> 
        <RenderCV generalInfo={info} professionalInfo={experiences} educationInfo={education} setShowCV={setShowCV} />
      </div>: 
      <div>
      <GeneralForm submited={generalSubmited} setSubmited={setGeneralSubmited} info={info} setInfo={setInfo} />
      <ProfessionalForm submited={professionalSubmited} setSubmited={setProfessionalSubmited} experiences={experiences} setExperiences={setExperiences} />
      <EducationForm submited={educationSubmited} setSubmited={setEducationSubmited} education={education} setEducation={setEducation} />
      </div>}  
      </div>)}

    </main>
    
  )
}

export default App
