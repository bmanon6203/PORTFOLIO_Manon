import { useEffect, useRef } from 'react'
import { useT } from '../i18n.jsx'
import Media from './Media.jsx'

const Row = ({ label, children }) => children ? <div className="row"><dt>{label}</dt><dd>{children}</dd></div> : null

export default function Modal({ project: p, onClose }) {
  const { tr, ui, cat } = useT()
  const btn = useRef(null)
  useEffect(() => {
    const prev = document.activeElement
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    btn.current?.focus()
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus?.() }
  }, [onClose])
  const title = tr(p.title)
  const videos = [p.video, ...(p.videos || [])].filter(Boolean)
  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <article className="sheet" role="dialog" aria-modal="true" aria-labelledby="m-title">
        <button ref={btn} className="close" aria-label={ui('close')} data-cursor="CLOSE" onClick={onClose}>✕</button>
        <h3 id="m-title">{title}</h3>
        <div className="hero-media">
          {videos[0] ? <video src={videos[0]} poster={p.cover || p.thumbnail} controls playsInline preload="metadata" /> : <Media src={p.cover || p.thumbnail} alt={title} seed={title} />}
        </div>
        <p className="lead">{tr(p.description)}</p>
        {p.details && <p>{tr(p.details)}</p>}
        <dl>
          <Row label={ui('role')}>{tr(p.role)?.join(', ')}</Row>
          <Row label={ui('software')}>{tr(p.software)?.join(', ')}</Row>
          <Row label={ui('category')}>{cat(p.category)}</Row>
          <Row label={ui('year')}>{p.year}</Row>
          <Row label={ui('context')}>{tr(p.client)}</Row>
        </dl>
        {videos.slice(1).map((v) => <video key={v} src={v} controls playsInline preload="none" />)}
        {p.images?.length > 0 && <div className="gallery">{p.images.map((s) => <Media key={s} src={s} alt="" seed={title} />)}</div>}
        {p.externalLink && <a className="ext" data-cursor="OPEN" href={p.externalLink} target="_blank" rel="noopener noreferrer">{ui('viewOnline')}</a>}
      </article>
    </div>
  )
}
