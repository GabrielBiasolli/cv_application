import { CompressedGeneralForm } from "./GeneralForm";
import { CompressedProfessionalForm } from "./ProfessionalForm";
import { CompressedEducationForm } from "./EducationForm";

export default function RenderCV({ generalInfo, professionalInfo, educationInfo, setShowCV }) {
    return (
        <div>
            {generalInfo.map(item => <CompressedGeneralForm key={item.id} item={item} />)}
            {professionalInfo.map(item => <CompressedProfessionalForm key={item.id} item={item} />)}
            {educationInfo.map(item => <CompressedEducationForm key={item.id} item={item} />)}
            <button type="button" className="cool-button" onClick={() => setShowCV(false)}>GoBack</button>
        </div>
    )
}