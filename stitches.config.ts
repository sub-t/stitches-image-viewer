import {
  mauve,
  mauveDark,
  mauveA,
  mauveDarkA,
  violet,
  violetDark,
  violetA,
  violetDarkA,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      ...violet,
      ...violetA,
      ...mauve,
      ...mauveA,

      background: mauve.mauve1,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
    },
    fontSizes: {
      1: '14px',
      2: '0.875rem',
      3: '1rem',
      4: '1.125rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '2rem',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    h: (value: Stitches.PropertyValue<'height'>) => ({
      height: value,
    }),
    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    minH: (value: Stitches.PropertyValue<'height'>) => ({
      minHeight: value,
    }),
    minW: (value: Stitches.PropertyValue<'width'>) => ({
      minWidth: value,
    }),
    maxH: (value: Stitches.PropertyValue<'height'>) => ({
      maxHeight: value,
    }),
    maxW: (value: Stitches.PropertyValue<'width'>) => ({
      maxWidth: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark', {
  colors: {
    ...violetDark,
    ...violetDarkA,
    ...mauveDark,
    ...mauveDarkA,

    background: mauveDark.mauve1,
  },
});
