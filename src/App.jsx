import { useEffect, useState } from 'react'
import { site } from './data/site.js'
import Background from './components/Background.jsx'
import Cursor from './components/Cursor.jsx'
import LangSwitch from './components/LangSwitch.jsx'
import { useT } from './i18n.jsx'
import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const PANELS = { profile: Profile, projects: Projects, contact: Contact }

export default function App() {
  const { tr, ui } = useT()
  const [view, setView] = useState('home')
  useEffect(() => {
    // ESC ferme la section (sauf si un popup projet est ouvert : il gère lui-même ESC)
    const onKey = (e) => e.key === 'Escape' && view !== 'home' && !document.querySelector('.modal') && setView('home')
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [view])
  const Panel = PANELS[view]
  return (
    <div className={`world ${view === 'home' ? 'is-home' : 'is-inside'}`}>
      <Background />
      <Cursor />
      <header className="hero" aria-hidden={view !== 'home'}>
        <h1 className="name" aria-label={site.name}>
          {[...site.name].map((c, i) => <span key={i} style={{ '--i': i }}>{c}</span>)}
        </h1>
        <p className="tagline">{tr(site.tagline)}</p>
        <p className="hint">{tr(site.hint)}</p>
      </header>
      <LangSwitch />
      <Nav view={view} onGo={setView} />
      {Panel && (
        <main className="panel" key={view}>
          <button className="back" data-cursor="RETOUR" onClick={() => setView('home')}>{ui('back')}</button>
          <Panel />
        </main>
      )}
    </div>
  )
}
