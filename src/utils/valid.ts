export const isValidLocale = (locale: string) => {
  const trimLocale = locale.trim();
  
  if (trimLocale === '') {
    return false;
  }
  
  try {
    return !!Intl.getCanonicalLocales(trimLocale);
  } catch (e) {
    return false;
  }
}