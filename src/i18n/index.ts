import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Auto-load semua locale: ./locales/{lang}/{page}.json (dan subfolder, mis. data/team.json).
const modules = import.meta.glob('./locales/**/*.json', { eager: true, import: 'default' })

const resources: Record<string, Record<string, object>> = {}
for (const path in modules) {
  // path: ./locales/{lang}/{namespace}.json  (namespace boleh bertingkat, mis. data/team)
  const match = path.match(/\.\/locales\/([^/]+)\/(.+)\.json$/)
  if (!match) continue
  const [, lang, ns] = match
  ;(resources[lang] ??= {})[ns] = modules[path] as object
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'id',
    fallbackLng: 'id',
    supportedLngs: ['id', 'en'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n