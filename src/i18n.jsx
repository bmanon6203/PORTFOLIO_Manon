import { createContext, useContext, useEffect, useState } from 'react'
import { categories } from './data/site.js'
import { ui } from './data/ui.js'

export const LANGS = ['fr', 'en']
const Ctx = createContext({ lang: 'fr', setLang() {} })
// Langue initiale : choix mémorisé, sinon langue du navigateur (français → fr, sinon en)
const initial = () => {
  try { const s = localStorage.getItem('lang'); if (LANGS.includes(s)) return s } catch {}
  return (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en'
}
export function LangProvider({ children }) {
  const [lang, setLang] = useState(initial)
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}
// Une valeur peut être un texte simple (identique dans les 2 langues) ou { fr: ..., en: ... }
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] ?? v.fr ?? '' : v)
export function useT() {
  const { lang, setLang } = useContext(Ctx)
  return {
    lang, setLang,
    tr: (v) => pick(v, lang),
    ui: (k) => pick(ui[k], lang),
    cat: (name) => { const c = categories.find((x) => x.name === name); return lang === 'en' ? c?.en || name : name }
  }
}
