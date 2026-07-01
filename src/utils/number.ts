import { isValidLocale } from '@/utils/valid'

const formatCompact = (locale: string = 'en-US', maxFractionDigit: number = 1) => {
  if (! isValidLocale(locale)) {
    locale = Intl.DateTimeFormat().resolvedOptions().locale;
  }
  
  const config: Intl.NumberFormatOptions = {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: Math.max(1, maxFractionDigit)
  }
  
  return new Intl.NumberFormat(locale, config)
}


const compactParts = (value: number, maxFractionDigit: number = 1) => {
  const parts = formatCompact('', maxFractionDigit).formatToParts(value);
  
  const partInteger = parts
    .filter(part => part.type === 'integer')
    .map(part => part.value)
    .join('');
  
  const partDecimal = parts.find(part => part.type === 'fraction')?.value ?? null;
  const partCompact = parts.find(part => part.type === 'compact')?.value ?? '';
  
  const number = partDecimal ? `${partInteger},${partDecimal}` : partInteger;
  
  return {
    value: Number(number),
    compact: partCompact
  }
}

const compactValue = (value: number, maxFractionDigit: number = 1) => {
  return formatCompact('', maxFractionDigit).format(value)
}



export { formatCompact, compactParts, compactValue }