import { useT } from '../i18n.jsx'
import Icon from './Icon.jsx'
import { site } from '../data/site.js'

// Objets flottants = navigation. Sur l'accueil : dispersés dans le décor. Dans une section : rangés en dock.
export default function Nav({ view, onGo }) {
  const { tr, ui } = useT()
  return (
    <nav className="nav" aria-label={ui('navAria')}>
      {site.nav.map((o, i) => (
        <button key={o.id} className={`obj ${view === o.id ? 'current' : ''}`} data-cursor="OPEN"
          style={{ '--x': o.x + '%', '--y': o.y + '%', '--i': i }} aria-label={`${tr(o.label)} — ${tr(o.hint)}`}
          aria-current={view === o.id ? 'page' : undefined} onClick={() => onGo(o.id)}>
          <span className="ico" aria-hidden="true"><Icon value={o.icon} /></span>
          <span className="lab"><b>{tr(o.label)}</b><small>{tr(o.hint)}</small></span>
        </button>
      ))}
    </nav>
  )
}
