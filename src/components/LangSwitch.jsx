import { LANGS, useT } from '../i18n.jsx'

export default function LangSwitch() {
  const { lang, setLang, ui } = useT()
  return (
    <div className="langs" role="group" aria-label={ui('langAria')}>
      {LANGS.map((l) => (
        <button key={l} className={l === lang ? 'on' : ''} aria-pressed={l === lang} data-cursor={l.toUpperCase()} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
      ))}
    </div>
  )
}
