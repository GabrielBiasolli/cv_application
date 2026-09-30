import introEn from '../content/intro.md?raw'
import introPt from '../content/intro.pt-BR.md?raw'
import Markdown from 'react-markdown'
import {useState} from 'react'

export default function Intro({ setShowIntro }) {
    const [ptBR, setPtBR] = useState(false)
    return (
        <div className="intro">
            {ptBR ?<button className="cool-button" onClick={() => setPtBR(false) }>en</button> : <button className="cool-button" onClick={() => setPtBR(true) }>ptBR</button>}
            <Markdown>
                {ptBR ? introPt : introEn}
            </Markdown>
            <button className="cool-button" onClick={() => setShowIntro(false) }>
                Go
            </button>

        </div>
    );
}