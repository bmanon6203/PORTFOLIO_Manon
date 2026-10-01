import { useT } from '../i18n.jsx'
import { site } from '../data/site.js'

// Bouton de téléchargement du CV (réglé dans data/site.js > cv). Masqué si aucun fichier n'est indiqué.
export default function CvLink() {
  const { tr } = useT()
  const file = tr(site.cv?.file)
  if (!file) return null
  return <a className="btn" href={file} download data-cursor="CV">{tr(site.cv.label)}</a>
}
