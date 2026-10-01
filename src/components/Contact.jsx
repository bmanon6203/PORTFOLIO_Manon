import { useState } from 'react'
import { useT } from '../i18n.jsx'
import Icon from './Icon.jsx'
import CvLink from './CvLink.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  const { ui } = useT()
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [msg, setMsg] = useState('')
  const submit = async (e) => {
    e.preventDefault()
    if (state === 'sending') return // anti double envoi
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data._gotcha) return // piège anti-spam
    if (!site.formEndpoint) { setState('error'); setMsg('errConfig'); return }
    setState('sending')
    try {
      const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      if (!r.ok) throw new Error()
      form.reset(); setState('sent')
    } catch { setState('error'); setMsg('errSend') }
  }
  return (
    <section className="contact" aria-labelledby="t-contact">
      <h2 id="t-contact">{ui('contact')}</h2>
      {state === 'sent' ? (
        <div className="sent" role="status"><span className="letter" aria-hidden="true">💌</span><p>{ui('sent')}</p>
          <button className="btn" onClick={() => setState('idle')}>{ui('another')}</button></div>
      ) : (
        <form onSubmit={submit} noValidate={false}>
          <label>{ui('fName')}<input name="name" required autoComplete="name" /></label>
          <label>{ui('fEmail')}<input name="email" type="email" required autoComplete="email" /></label>
          <label>{ui('fSubject')}<input name="subject" required /></label>
          <label>{ui('fMessage')}<textarea name="message" rows="5" required /></label>
          <input name="_gotcha" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
          <button className="btn" data-cursor="SEND" disabled={state === 'sending'}>{state === 'sending' ? ui('sending') : ui('send')}</button>
          {state === 'error' && <p className="err" role="alert">{ui(msg)}</p>}
        </form>
      )}
      <ul className="socials">
        {site.socials.map((s) => (
          <li key={s.id}>
            <a href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={s.label} data-cursor={s.label}>
              <span aria-hidden="true"><Icon value={s.logo || s.glyph} /></span><em>{s.label}</em>
            </a>
          </li>
        ))}
      </ul>
      <p className="cvrow"><CvLink /></p>
    </section>
  )
}
