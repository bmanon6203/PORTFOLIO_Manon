import { useState } from 'react'
import CvLink from './CvLink.jsx'
import { useT } from '../i18n.jsx'
import { site, skills } from '../data/site.js'

const ring = (list, r, off, kind) => list.map((item, i) => {
  const a = (i / list.length) * Math.PI * 2 + off
  return { id: kind + i, kind, item, x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) }
})

// Constellation : logiciels sur l'orbite extérieure, qualités sur l'orbite intérieure.
export default function Profile() {
  const { tr, ui } = useT()
  const [sel, setSel] = useState(null)
  const nodes = [...ring(skills.hard, 40, -Math.PI / 2, 'hard'), ...ring(skills.soft, 22, -Math.PI / 2 + 0.4, 'soft')]
  const cur = nodes.find((n) => n.id === sel)
  return (
    <section className="profile" aria-labelledby="t-profile">
      <div className="prose">
        <h2 id="t-profile">{tr(site.profile.title)}</h2>
        {tr(site.profile.text).map((t, i) => <p key={i}>{t}</p>)}
        <p className="legend"><i className="dot hard" />{ui('legendHard')}<i className="dot soft" />{ui('legendSoft')}</p>
        <p className="caption" aria-live="polite">{cur ? `${tr(cur.item)} — ${ui(cur.kind === 'hard' ? 'tagHard' : 'tagSoft')}` : ui('captionIdle')}</p>
        <CvLink />
      </div>
      <div className="constellation">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {nodes.map((n) => <line key={n.id} x1="50" y1="50" x2={n.x} y2={n.y} className={sel === n.id ? 'on' : ''} />)}
        </svg>
        <div className="core">{site.name}</div>
        {nodes.map((n, i) => (
          <button key={n.id} className={`star ${n.kind} ${sel === n.id ? 'on' : ''}`} data-cursor="+"
            style={{ left: n.x + '%', top: n.y + '%', '--d': (i % 5) * 0.7 + 's' }}
            onClick={() => setSel(n.id)} onMouseEnter={() => setSel(n.id)} onFocus={() => setSel(n.id)}>
            <span>{tr(n.item)}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
