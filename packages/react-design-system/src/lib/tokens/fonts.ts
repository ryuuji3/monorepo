export const fonts = {
  family: {
    sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'].join(', '),
    serif: ['Georgia', 'ui-serif', 'serif'].join(', '),
    mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'].join(', '),
  },
  size: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  weight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

export type FontFamily = keyof typeof fonts.family;
export type FontSize = keyof typeof fonts.size;
export type FontWeight = keyof typeof fonts.weight;
